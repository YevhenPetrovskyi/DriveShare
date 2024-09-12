import { db } from '@/lib/db';

export const getPasswordResetTokenByToken = (token: string) => {
  try {
    const passwordResetToken = db.passwordResetToken.findUnique({
      where: {
        token,
      },
    });

    return passwordResetToken;
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByEmail = (email: string) => {
  try {
    const passwordResetToken = db.passwordResetToken.findFirst({
      where: {
        email,
      },
    });

    return passwordResetToken;
  } catch {
    return null;
  }
};
