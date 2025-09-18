// Lazy loaded components for better performance
import { lazy } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// SSR detection utility
const isSSR = typeof window === 'undefined';

// For SSR/SSG, load components immediately to avoid hydration mismatches
// For client-side, use lazy loading for performance
export const LazyServices = isSSR ? require('./Services').default : lazy(() => import('./Services'));
export const LazyAbout = isSSR ? require('./About').default : lazy(() => import('./About'));
export const LazyTestimonials = isSSR ? require('./Testimonials').default : lazy(() => import('./Testimonials'));
export const LazyFAQ = isSSR ? require('./FAQ').default : lazy(() => import('./FAQ'));
export const LazyContact = isSSR ? require('./Contact').default : lazy(() => import('./Contact'));

// Loading skeletons for each component
export const ServicesLoading = () => (
  <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
        <Skeleton className="h-6 w-full max-w-4xl mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-card rounded-lg p-8">
            <Skeleton className="h-20 w-20 rounded-full mx-auto mb-8" />
            <Skeleton className="h-8 w-3/4 mx-auto mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const AboutLoading = () => (
  <section className="py-32 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <Skeleton className="h-12 w-3/4 mb-8" />
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-6 w-2/3 mb-8" />
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center space-x-3">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-4 flex-1" />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <Skeleton className="h-64 w-full rounded-2xl" />
          <Skeleton className="h-32 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  </section>
);

export const TestimonialsLoading = () => (
  <section className="py-32 bg-secondary/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <Skeleton className="h-8 w-2/3 mx-auto" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="bg-card rounded-lg p-6 text-center">
            <Skeleton className="h-20 w-20 rounded-xl mx-auto mb-4" />
            <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FAQLoading = () => (
  <section className="py-32 bg-background">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <Skeleton className="h-12 w-2/3 mx-auto mb-6" />
        <Skeleton className="h-6 w-3/4 mx-auto" />
      </div>
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="border rounded-lg p-6">
            <Skeleton className="h-6 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ContactLoading = () => (
  <section className="py-32 bg-secondary/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <Skeleton className="h-12 w-1/2 mx-auto mb-6" />
        <Skeleton className="h-6 w-2/3 mx-auto" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-6">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-12 w-1/3" />
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="flex-1">
                  <Skeleton className="h-4 w-1/3 mb-2" />
                  <Skeleton className="h-3 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);