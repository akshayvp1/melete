import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
// import { Types } from 'mongoose';

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'your_access_secret';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your_refresh_secret';

if (!JWT_ACCESS_SECRET || !JWT_REFRESH_SECRET) {
  throw new Error('JWT secrets are not defined in .env file');
}

export interface ITokenPayload {
  id: string;
  email: string;
  role: 'user' | 'counsellor' | 'admin';
}

export const generateTokens = (payload: ITokenPayload) => {
  const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: '1h' });
  const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '7d' });

  return { accessToken, refreshToken };
};

// Verify Access Token
export const verifyAccessToken = (token: string): ITokenPayload => {
  try {
    return jwt.verify(token, JWT_ACCESS_SECRET) as ITokenPayload;
  } catch (error) {
    throw new Error('Invalid or expired access token');
  }
};

// Verify Refresh Token
export const verifyRefreshToken = (token: string): ITokenPayload => {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET) as ITokenPayload;
  } catch (error) {
    throw new Error('Invalid or expired refresh token');
  }
};

// Define AuthenticatedRequest Interface
export interface AuthenticatedRequest extends Request {
  user?: ITokenPayload;
}

// Middleware for Authentication
export const authenticateUser = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = verifyAccessToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};