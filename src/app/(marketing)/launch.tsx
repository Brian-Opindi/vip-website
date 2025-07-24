'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/vip/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const Launch = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-coffee rounded-3xl p-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-4xl text-white leading-tight font-urbanist">
                Launching soon on
                <br />
                iOS & Android
              </h2>

              {/* Form */}
              <div className="space-y-6">
                <Card className="w-full max-w-sm bg-white border-0">
                  <CardContent>
                    <form>
                      <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                          <Input
                            id="name"
                            type="name"
                            placeholder="Enter your name"
                            className="font-urbanist text-sm"
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="font-urbanist text-sm"
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Who are you protecting today?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>
                                  Who are you protecting today?
                                </SelectLabel>
                                <SelectItem value="myself">Myself</SelectItem>
                                <SelectItem value="my-child">
                                  My child
                                </SelectItem>
                                <SelectItem value="my-parent">
                                  My parent
                                </SelectItem>
                                <SelectItem value="my-team">My team</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex-col gap-2 items-start">
                    <Button
                      variant="vip"
                      className="p-6 bg-black hover:bg-coffee text-white"
                    >
                      <span
                        className="
                                              shadow-lg bg-vanilla flex items-center justify-center rounded-full dark:bg-white/20 w-8 h-8 -ml-4 mr-2"
                        aria-hidden="true"
                      >
                        <ArrowUpRight className="text-coffee" size={20} />
                      </span>
                      Notify Me First!
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Right Column - App Image */}
            <div className="flex items-center justify-center">
              <div className="absolute w-full max-w-md">
                <Image
                  src="/images/app/mockup-2.png"
                  alt="VIP App Preview"
                  width={400}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Launch;
