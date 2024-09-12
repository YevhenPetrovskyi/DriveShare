'use server';

import * as z from 'zod';

import { ResetSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { sendPasswordResetEmail } from '@/lib/mail';
import { generatePasswordResetToken } from '@/lib/tokens';

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validateFields = ResetSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: 'Invalid email!' };
  }

  const { email } = validateFields.data;

  const existingUser = await getUserByEmail(email as string);

  if (!existingUser) {
    return { error: 'Email not found!' };
  }

  const passwordResetToken = await generatePasswordResetToken(email as string);
  await sendPasswordResetEmail(
    email as string,
    passwordResetToken.token as string
  );

  return { success: 'Reset email sent!' };
};
