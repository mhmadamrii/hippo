'use client';

import Link from 'next/link';

import { ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '~/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
// import { trpc } from '~/trpc/client';
import { toast } from 'sonner';
import { ZodError } from 'zod';
import { useRouter } from 'next/navigation';
import {
  TAuthCredentialsValidator,
  AuthCredentialsValidator,
} from '~/lib/validators/account-credentials-validator';

import { Icons } from '~/components/Icons';
import { Button, buttonVariants } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { useForm } from 'react-hook-form';

export default function SignUn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const isLoading = true;

  //   const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({
  //     onError: (err: unknown) => {
  //         console.log(err)
  //     },

  //   })
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Icons.logo className="h-20 w-20" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>

          <Link
            className={buttonVariants({
              variant: 'link',
              className: 'gap-1.5',
            })}
            href="/sign-in"
          >
            Already have an account? Sign-in
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6">
          <form>
            <div className="grid gap-2">
              <div className="grid gap-1 py-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register('email')}
                  className={cn({
                    'focus-visible:ring-red-500': errors.email,
                  })}
                  placeholder="you@example.com"
                />
                {errors?.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="grid gap-1 py-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  {...register('password')}
                  type="password"
                  className={cn({
                    'focus-visible:ring-red-500': errors.password,
                  })}
                  placeholder="Password"
                />
                {errors?.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <Button disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}