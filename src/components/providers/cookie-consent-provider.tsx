'use client';

import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Cookie, X, ChevronLeft, ChevronDown } from 'lucide-react';

// Types
export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export interface CookieConsentConfig {
  companyName?: string;
  privacyPolicyUrl?: string;
  cookiePolicyUrl?: string;
  contactUrl?: string;
  logoUrl?: string;
  debug?: boolean;
  onAnalyticsEnabled?: () => void;
  onMarketingEnabled?: () => void;
  onFunctionalEnabled?: () => void;
  onError?: (error: Error, context: string) => void;
}

export type CookieConsentStatus =
  | 'pending'
  | 'accepted'
  | 'rejected'
  | 'customized';

export interface CookieConsentState {
  status: CookieConsentStatus;
  preferences: CookiePreferences;
  timestamp: number;
  showBanner: boolean;
  showPreferences: boolean;
}

export interface CookieConsentContextType {
  state: CookieConsentState;
  acceptAll: () => void;
  rejectAll: () => void;
  updatePreferences: (preferences: Partial<CookiePreferences>) => void;
  savePreferences: () => void;
  showPreferencesDialog: () => void;
  hidePreferencesDialog: () => void;
  resetConsent: () => void;
  closeBanner: () => void;
}

// Default preferences
const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

// Cookie categories for the preferences dialog
const COOKIE_CATEGORIES = [
  {
    id: 'necessary' as keyof CookiePreferences,
    name: 'Necessary Cookies',
    description:
      'Essential for the website to function properly. These cookies enable basic website functionality and are required for the site to work correctly.',
    required: true,
  },
  {
    id: 'analytics' as keyof CookiePreferences,
    name: 'Analytics Cookies',
    description:
      'Help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website performance.',
    required: false,
  },
  {
    id: 'marketing' as keyof CookiePreferences,
    name: 'Marketing Cookies',
    description:
      'Used to deliver personalized advertisements and track the effectiveness of our marketing campaigns. These cookies may be set by our advertising partners.',
    required: false,
  },
  {
    id: 'functional' as keyof CookiePreferences,
    name: 'Functional Cookies',
    description:
      'Enable enhanced functionality and personalization, such as remembering your preferences, language settings, and providing live chat support.',
    required: false,
  },
];

// Context
const CookieConsentContext = createContext<
  CookieConsentContextType | undefined
>(undefined);

// Provider Props
interface CookieConsentProviderProps {
  children: ReactNode;
  config?: CookieConsentConfig;
}

// Custom Collapsible Item Component to avoid nested buttons
interface CollapsibleCookieItemProps {
  category: (typeof COOKIE_CATEGORIES)[0];
  isChecked: boolean;
  onToggle: (checked: boolean) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

function CollapsibleCookieItem({
  category,
  isChecked,
  onToggle,
  isOpen,
  onOpenChange,
}: CollapsibleCookieItemProps) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      {/* Header with checkbox and trigger */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-3 flex-1">
          {category.required ? (
            <span className="text-xs font-urbanist text-muted-foreground">
              Always on
            </span>
          ) : (
            <Checkbox
              checked={isChecked}
              onCheckedChange={checked => onToggle(!!checked)}
              className="data-[state=checked]:bg-coffee data-[state=checked]:border-coffee"
            />
          )}
          <span className="font-medium text-xs font-urbanist text-coffee">
            {category.name}
          </span>
        </div>
        <button
          onClick={() => onOpenChange(!isOpen)}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
          aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${category.name} details`}
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Collapsible content */}
      {isOpen && (
        <div className="pb-3 pl-6 pr-8">
          <p className="text-xs text-muted-foreground font-urbanist leading-relaxed">
            {category.description}
          </p>
        </div>
      )}
    </div>
  );
}

// Provider Component
export function CookieConsentProvider({
  children,
  config = {},
}: CookieConsentProviderProps) {
  const {
    companyName = 'Our Company',
    privacyPolicyUrl = '/privacy-policy',
    cookiePolicyUrl = '/cookie-policy',
    contactUrl = '/contact',
    logoUrl = '/images/logos/VIP icon.png',
    debug = false,
    onAnalyticsEnabled,
    onMarketingEnabled,
    onFunctionalEnabled,
    onError,
  } = config;

  const [state, setState] = useState<CookieConsentState>({
    status: 'pending',
    preferences: DEFAULT_PREFERENCES,
    timestamp: Date.now(),
    showBanner: false,
    showPreferences: false,
  });

  // Track which accordion items are open
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  // Debug logging helper - memoized to avoid useEffect dependency issues
  const debugLog = useCallback(
    (message: string, data?: unknown) => {
      if (debug && process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log(`[CookieConsent] ${message}`, data || '');
      }
    },
    [debug]
  );

  // Error handling helper - memoized to avoid useEffect dependency issues
  const handleError = useCallback(
    (error: Error, context: string) => {
      if (onError) {
        onError(error, context);
      } else if (debug && process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error(`[CookieConsent Error] ${context}:`, error);
      }
      // In production, you might want to send this to an error tracking service
    },
    [onError, debug]
  );

  // Trigger cookie-based services - memoized to avoid useEffect dependency issues
  const triggerCookieServices = useCallback(
    (preferences: CookiePreferences) => {
      try {
        if (preferences.analytics) {
          debugLog('Analytics cookies enabled - initializing tracking');
          onAnalyticsEnabled?.();
        }

        if (preferences.marketing) {
          debugLog('Marketing cookies enabled - initializing advertising');
          onMarketingEnabled?.();
        }

        if (preferences.functional) {
          debugLog(
            'Functional cookies enabled - initializing enhanced features'
          );
          onFunctionalEnabled?.();
        }
      } catch (error) {
        handleError(
          error instanceof Error ? error : new Error('Unknown error'),
          'triggering cookie services'
        );
      }
    },
    [
      debugLog,
      onAnalyticsEnabled,
      onMarketingEnabled,
      onFunctionalEnabled,
      handleError,
    ]
  );

  // Load saved consent on mount
  useEffect(() => {
    try {
      const savedConsent = localStorage.getItem('cookie-consent');
      if (savedConsent) {
        const parsed = JSON.parse(savedConsent);
        setState(prev => ({
          ...prev,
          status: parsed.status || 'customized',
          preferences: { ...DEFAULT_PREFERENCES, ...parsed.preferences },
          timestamp: parsed.timestamp || Date.now(),
          showBanner: false,
        }));

        // Trigger services based on saved preferences
        triggerCookieServices({
          ...DEFAULT_PREFERENCES,
          ...parsed.preferences,
        });

        debugLog('Loaded saved cookie preferences', parsed);
      } else {
        setState(prev => ({ ...prev, showBanner: true }));
        debugLog('No saved preferences found, showing banner');
      }
    } catch (error) {
      handleError(
        error instanceof Error ? error : new Error('Unknown error'),
        'parsing saved cookie consent'
      );
      setState(prev => ({ ...prev, showBanner: true }));
    }
  }, [debugLog, handleError, triggerCookieServices]);

  // Save consent to localStorage
  const saveConsent = useCallback(
    (status: CookieConsentStatus, preferences: CookiePreferences) => {
      try {
        const consentData = {
          status,
          preferences,
          timestamp: Date.now(),
        };
        localStorage.setItem('cookie-consent', JSON.stringify(consentData));
        triggerCookieServices(preferences);
        debugLog('Saved cookie preferences', consentData);
      } catch (error) {
        handleError(
          error instanceof Error ? error : new Error('Unknown error'),
          'saving cookie consent to localStorage'
        );
      }
    },
    [triggerCookieServices, debugLog, handleError]
  );

  // Context methods
  const acceptAll = useCallback(() => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };

    setState(prev => ({
      ...prev,
      status: 'accepted',
      preferences: allAccepted,
      showBanner: false,
      showPreferences: false,
    }));

    saveConsent('accepted', allAccepted);
    debugLog('User accepted all cookies');
  }, [saveConsent, debugLog]);

  const rejectAll = useCallback(() => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };

    setState(prev => ({
      ...prev,
      status: 'rejected',
      preferences: onlyNecessary,
      showBanner: false,
      showPreferences: false,
    }));

    saveConsent('rejected', onlyNecessary);
    debugLog('User rejected all optional cookies');
  }, [saveConsent, debugLog]);

  const updatePreferences = useCallback(
    (newPreferences: Partial<CookiePreferences>) => {
      setState(prev => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          ...newPreferences,
          necessary: true, // Always keep necessary cookies enabled
        },
      }));
    },
    []
  );

  const savePreferences = useCallback(() => {
    setState(prev => ({
      ...prev,
      status: 'customized',
      showBanner: false,
      showPreferences: false,
    }));

    saveConsent('customized', state.preferences);
    debugLog('User saved custom preferences', state.preferences);
  }, [saveConsent, state.preferences, debugLog]);

  const showPreferencesDialog = useCallback(() => {
    setState(prev => ({ ...prev, showPreferences: true }));
  }, []);

  const hidePreferencesDialog = useCallback(() => {
    setState(prev => ({ ...prev, showPreferences: false }));
  }, []);

  const closeBanner = useCallback(() => {
    setState(prev => ({ ...prev, showBanner: false }));
  }, []);

  const resetConsent = useCallback(() => {
    try {
      localStorage.removeItem('cookie-consent');
      setState({
        status: 'pending',
        preferences: DEFAULT_PREFERENCES,
        timestamp: Date.now(),
        showBanner: true,
        showPreferences: false,
      });
      debugLog('Cookie consent reset');
    } catch (error) {
      handleError(
        error instanceof Error ? error : new Error('Unknown error'),
        'resetting cookie consent'
      );
    }
  }, [debugLog, handleError]);

  const toggleItemOpen = useCallback((itemId: string) => {
    setOpenItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  }, []);

  const handleImageError = useCallback(() => {
    debugLog('Logo failed to load, using fallback');
  }, [debugLog]);

  const contextValue: CookieConsentContextType = {
    state,
    acceptAll,
    rejectAll,
    updatePreferences,
    savePreferences,
    showPreferencesDialog,
    hidePreferencesDialog,
    resetConsent,
    closeBanner,
  };

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}

      {/* Cookie Banner - Bottom Right Design */}
      {state.showBanner && (
        <div className="fixed bottom-4 right-4 z-50 w-96 max-w-[calc(100vw-2rem)]">
          <div className="bg-white p-5 border-0 rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                {state.showPreferences ? (
                  <button
                    onClick={hidePreferencesDialog}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Go back"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                ) : (
                  <>
                    <Image
                      src={logoUrl}
                      alt={`${companyName} logo`}
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                      onError={handleImageError}
                    />
                    <Cookie className="w-6 h-6 hidden" />
                  </>
                )}
              </div>
              <h3 className="font-medium text-sm font-urbanist text-coffee">
                {state.showPreferences
                  ? 'Cookie Preferences'
                  : 'Manage Consent'}
              </h3>
              <button
                onClick={closeBanner}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close cookie banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              {state.showPreferences ? (
                // Preferences Content with Custom Collapsible Items
                <div className="space-y-0">
                  {COOKIE_CATEGORIES.map(category => (
                    <CollapsibleCookieItem
                      key={category.id}
                      category={category}
                      isChecked={state.preferences[category.id]}
                      onToggle={checked =>
                        updatePreferences({ [category.id]: checked })
                      }
                      isOpen={openItems[category.id] || false}
                      onOpenChange={() => toggleItemOpen(category.id)}
                    />
                  ))}
                </div>
              ) : (
                // Default Content
                <p className="text-xs text-muted-foreground font-urbanist leading-relaxed">
                  We use cookies to enhance your browsing experience, serve
                  personalized content, and analyze our traffic. By clicking
                  &quot;Accept&quot;, you consent to our use of cookies.
                </p>
              )}
            </div>

            {/* Footer - Buttons */}
            <div className="px-4 pb-3">
              {state.showPreferences ? (
                // Preferences Buttons
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={hidePreferencesDialog}
                    className="text-xs bg-transparent hover:bg-background"
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    onClick={savePreferences}
                    className="text-xs bg-coffee hover:bg-black"
                  >
                    Save Preferences
                  </Button>
                </div>
              ) : (
                // Default Buttons
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    size="sm"
                    onClick={acceptAll}
                    className="text-xs bg-coffee hover:bg-black"
                  >
                    Accept all
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={rejectAll}
                    className="text-xs bg-transparent hover:bg-background"
                  >
                    Reject all
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={showPreferencesDialog}
                    className="text-xs bg-transparent hover:bg-background"
                  >
                    Preferences
                  </Button>
                </div>
              )}
            </div>

            {/* Links - Only show when not in preferences mode */}
            {!state.showPreferences && (
              <div className="px-4 pb-4 border-t pt-3">
                <div className="flex flex-row gap-3 justify-between">
                  <a
                    href={cookiePolicyUrl}
                    className="text-xs font-urbanist text-muted-foreground hover:text-coffee transition-colors underline hover:no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cookie Policy
                  </a>
                  <a
                    href={privacyPolicyUrl}
                    className="text-xs font-urbanist text-muted-foreground hover:text-coffee transition-colors underline hover:no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Protection of Personal Data
                  </a>
                  <a
                    href={contactUrl}
                    className="text-xs font-urbanist text-muted-foreground hover:text-coffee transition-colors underline hover:no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </CookieConsentContext.Provider>
  );
}

// Export the context for use in the custom hook
export { CookieConsentContext };
