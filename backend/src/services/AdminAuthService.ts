// import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { ITokenPayload, generateTokens } from '../utils/jwt';
import bcrypt from 'bcryptjs';
import { IAdmin } from '../interfaces/IAdmin';
import AdminAuthRepository from '../repositories/AdminAuthRepository';
import { IAdminAuthService } from './interface/IAdminAuthService';

interface SignInResult {
  isMatch: boolean;
  message: string;
  accessToken?: string;
  refreshToken?: string;
  user?: Omit<IAdmin, 'password'>;
}

@injectable()
class AdminAuthService implements IAdminAuthService {
  constructor(
    @inject('AdminAuthRepository') private adminAuthRepository: AdminAuthRepository,
  ) {}

  async signIn(email: string, password: string): Promise<SignInResult> {
    try {
      const user = await this.adminAuthRepository.findByEmail(email);

      if (!user) {
        return { isMatch: false, message: 'User not found.' };
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return { isMatch: false, message: 'Incorrect password.' };
      }

      const payload: ITokenPayload = {
        id: user._id.toString(),
        email: user.email,
        role: user.role as 'user' | 'counsellor' | 'admin',
      };

      const { accessToken, refreshToken } = generateTokens(payload);

      // Exclude password from user object
      const { password: _, ...safeUser } = user;

      return {
        isMatch: true,
        message: 'Login successful.',
        accessToken,
        refreshToken,
        user: safeUser as Omit<IAdmin, 'password'>,
      };
    } catch (error) {
      console.error('Error during signIn:', error);
      return { isMatch: false, message: 'Internal server error.' };
    }
  }
}

export default AdminAuthService;