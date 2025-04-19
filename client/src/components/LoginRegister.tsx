// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FcGoogle } from 'react-icons/fc';

// interface LoginFormData {
//   email: string;
//   password: string;
// }

// interface RegisterFormData {
//   name: string;
//   email: string;
//   mobile: string;
//   password: string;
//   confirmPassword: string;
// }

// interface FormErrors {
//   name?: string;
//   email?: string;
//   mobile?: string;
//   password?: string;
//   confirmPassword?: string;
// }

// const LoginRegister: React.FC = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [loginForm, setLoginForm] = useState<LoginFormData>({ email: '', password: '' });
//   const [registerForm, setRegisterForm] = useState<RegisterFormData>({
//     name: '',
//     email: '',
//     mobile: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [errors, setErrors] = useState<FormErrors>({});

//   // Handle login form input changes
//   const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setLoginForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle register form input changes
//   const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setRegisterForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // Validate register form
//   const validateRegister = (): boolean => {
//     const newErrors: FormErrors = {};
//     if (!registerForm.name.trim()) newErrors.name = 'Name is required';
//     if (!registerForm.email.includes('@')) newErrors.email = 'Invalid email address';
//     if (!/^\d{10}$/.test(registerForm.mobile)) newErrors.mobile = 'Mobile must be 10 digits';
//     if (registerForm.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     if (registerForm.password !== registerForm.confirmPassword)
//       newErrors.confirmPassword = 'Passwords do not match';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle login submission
//   const handleLoginSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Placeholder: Log form data (replace with API call)
//     console.log('Login submitted:', loginForm);
//     // Reset form
//     setLoginForm({ email: '', password: '' });
//   };

//   // Handle register submission
//   const handleRegisterSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateRegister()) {
//       // Placeholder: Log form data (replace with API call)
//       console.log('Register submitted:', registerForm);
//       // Reset form
//       setRegisterForm({ name: '', email: '', mobile: '', password: '', confirmPassword: '' });
//       setErrors({});
//     }
//   };

//   // Handle Google login (placeholder)
//   const handleGoogleLogin = () => {
//     console.log('Initiating Google login...');
//     // TODO: Implement Google OAuth (e.g., Firebase)
//   };

//   // Animation variants
//   const formVariants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
//     exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
//   };

//   return (
//     <motion.div
//       className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//     >
//       <h2 className="text-2xl font-bold text-center mb-6" style={{ color: '#015F4A' }}>
//         {isLogin ? 'Login' : 'Register'}
//       </h2>

//       {isLogin ? (
//         <motion.form
//           key="login"
//           onSubmit={handleLoginSubmit}
//           variants={formVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//         >
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={loginForm.email}
//               onChange={handleLoginChange}
//               className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31A382]"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={loginForm.password}
//               onChange={handleLoginChange}
//               className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31A382]"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-[#31A382] text-white font-semibold rounded-md hover:bg-[#2F9B7A] transition-colors duration-300"
//           >
//             Login
//           </button>
//           <button
//             type="button"
//             onClick={handleGoogleLogin}
//             className="mt-4 w-full py-2 px-4 bg-white text-gray-700 font-semibold rounded-md border border-gray-300 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
//           >
//             <FcGoogle size={20} />
//             Login with Google
//           </button>
//           <p className="mt-4 text-center text-sm">
//             Don’t have an account?{' '}
//             <button
//               type="button"
//               onClick={() => setIsLogin(false)}
//               className="text-[#31A382] hover:underline"
//             >
//               Register
//             </button>
//           </p>
//         </motion.form>
//       ) : (
//         <motion.form
//           key="register"
//           onSubmit={handleRegisterSubmit}
//           variants={formVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//         >
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={registerForm.name}
//               onChange={handleRegisterChange}
//               className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31A382]"
//               required
//             />
//             {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={registerForm.email}
//               onChange={handleRegisterChange}
//               className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31A382]"
//               required
//             />
//             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//           </div>
//           <div className="mb-4">
//             <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
//               Mobile
//             </label>
//             <input
//               type="tel"
//               id="mobile"
//               name="mobile"
//               value={registerForm.mobile}
//               onChange={handleRegisterChange}
//               className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31A382]"
//               required
//             />
//             {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={registerForm.password}
//               onChange={handleRegisterChange}
//               className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31A382]"
//               required
//             />
//             {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//           </div>
//           <div className="mb-6">
//             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={registerForm.confirmPassword}
//               onChange={handleRegisterChange}
//               className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31A382]"
//               required
//             />
//             {errors.confirmPassword && (
//               <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
//             )}
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-[#31A382] text-white font-semibold rounded-md hover:bg-[#2F9B7A] transition-colors duration-300"
//           >
//             Register
//           </button>
//           <p className="mt-4 text-center text-sm">
//             Already have an account?{' '}
//             <button
//               type="button"
//               onClick={() => setIsLogin(true)}
//               className="text-[#31A382] hover:underline"
//             >
//               Login
//             </button>
//           </p>
//         </motion.form>
//       )}
//     </motion.div>
//   );
// };

// export default LoginRegister



// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FcGoogle } from 'react-icons/fc';
// import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlinePhone } from 'react-icons/hi';

// interface LoginFormData {
//   email: string;
//   password: string;
// }

// interface RegisterFormData {
//   name: string;
//   email: string;
//   mobile: string;
//   password: string;
//   confirmPassword: string;
// }

// interface FormErrors {
//   name?: string;
//   email?: string;
//   mobile?: string;
//   password?: string;
//   confirmPassword?: string;
// }

// const LoginRegister: React.FC = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [loginForm, setLoginForm] = useState<LoginFormData>({ email: '', password: '' });
//   const [registerForm, setRegisterForm] = useState<RegisterFormData>({
//     name: '',
//     email: '',
//     mobile: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [errors, setErrors] = useState<FormErrors>({});

//   // Handle login form input changes
//   const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setLoginForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle register form input changes
//   const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setRegisterForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // Validate login form
//   const validateLogin = (): boolean => {
//     const newErrors: FormErrors = {};
//     if (!loginForm.email.includes('@')) newErrors.email = 'Invalid email address';
//     if (!loginForm.password) newErrors.password = 'Password is required';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Validate register form
//   const validateRegister = (): boolean => {
//     const newErrors: FormErrors = {};
//     if (!registerForm.name.trim()) newErrors.name = 'Name is required';
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerForm.email)) newErrors.email = 'Invalid email address';
//     if (!/^\d{10}$/.test(registerForm.mobile)) newErrors.mobile = 'Mobile must be 10 digits';
//     if (registerForm.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     if (registerForm.password !== registerForm.confirmPassword)
//       newErrors.confirmPassword = 'Passwords do not match';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle login submission
//   const handleLoginSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateLogin()) {
//       console.log('Login submitted:', loginForm);
//       setLoginForm({ email: '', password: '' });
//       setErrors({});
//     }
//   };

//   // Handle register submission
//   const handleRegisterSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateRegister()) {
//       console.log('Register submitted:', registerForm);
//       setRegisterForm({ name: '', email: '', mobile: '', password: '', confirmPassword: '' });
//       setErrors({});
//     }
//   };

//   // Handle Google login (placeholder)
//   const handleGoogleLogin = () => {
//     console.log('Initiating Google login...');
//     // TODO: Implement Google OAuth (e.g., Firebase)
//   };

//   // Animation variants
//   const formVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//     exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
//   };

//   return (
//     <motion.div
//       className="max-w-lg w-full mx-auto p-6 bg-white rounded-xl shadow-xl"
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.6 }}
//     >
//       {/* Tabs */}
//       <div className="flex border-b border-gray-200 mb-6">
//         <button
//           className={`flex-1 py-3 text-lg font-semibold transition-colors duration-300 ${
//             isLogin ? 'text-[#31A382] border-b-2 border-[#31A382]' : 'text-gray-500 hover:text-[#015F4A]'
//           }`}
//           onClick={() => setIsLogin(true)}
//         >
//           Login
//         </button>
//         <button
//           className={`flex-1 py-3 text-lg font-semibold transition-colors duration-300 ${
//             !isLogin ? 'text-[#31A382] border-b-2 border-[#31A382]' : 'text-gray-500 hover:text-[#015F4A]'
//           }`}
//           onClick={() => setIsLogin(false)}
//         >
//           Register
//         </button>
//       </div>

//       <AnimatePresence mode="wait">
//         {isLogin ? (
//           <motion.form
//             key="login"
//             onSubmit={handleLoginSubmit}
//             variants={formVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="space-y-4"
//           >
//             <div className="relative">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                 Email
//               </label>
//               <div className="relative">
//                 <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={loginForm.email}
//                   onChange={handleLoginChange}
//                   className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31A382] transition-all duration-300"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>
//             <div className="relative">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                 Password
//               </label>
//               <div className="relative">
//                 <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={loginForm.password}
//                   onChange={handleLoginChange}
//                   className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31A382] transition-all duration-300"
//                   placeholder="Enter your password"
//                   required
//                 />
//               </div>
//               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-[#31A382] text-white font-semibold rounded-md hover:bg-[#2F9B7A] transition-colors duration-300"
//             >
//               Login
//             </button>
//             <button
//               type="button"
//               onClick={handleGoogleLogin}
//               className="w-full py-2 px-4 bg-white text-gray-700 font-semibold rounded-md border border-gray-300 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
//             >
//               <FcGoogle size={20} />
//               Login with Google
//             </button>
//           </motion.form>
//         ) : (
//           <motion.form
//             key="register"
//             onSubmit={handleRegisterSubmit}
//             variants={formVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="grid grid-cols-1 sm:grid-cols-2 gap-4"
//           >
//             <div className="relative sm:col-span-2">
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                 Name
//               </label>
//               <div className="relative">
//                 <HiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={registerForm.name}
//                   onChange={handleRegisterChange}
//                   className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31A382] transition-all duration-300"
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>
//               {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//             </div>
//             <div className="relative">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                 Email
//               </label>
//               <div className="relative">
//                 <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={registerForm.email}
//                   onChange={handleRegisterChange}
//                   className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31A382] transition-all duration-300"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>
//             <div className="relative">
//               <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
//                 Mobile
//               </label>
//               <div className="relative">
//                 <HiOutlinePhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="tel"
//                   id="mobile"
//                   name="mobile"
//                   value={registerForm.mobile}
//                   onChange={handleRegisterChange}
//                   className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31A382] transition-all duration-300"
//                   placeholder="Enter your mobile"
//                   required
//                 />
//               </div>
//               {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
//             </div>
//             <div className="relative">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                 Password
//               </label>
//               <div className="relative">
//                 <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={registerForm.password}
//                   onChange={handleRegisterChange}
//                   className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31A382] transition-all duration-300"
//                   placeholder="Enter your password"
//                   required
//                 />
//               </div>
//               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//             </div>
//             <div className="relative">
//               <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={registerForm.confirmPassword}
//                   onChange={handleRegisterChange}
//                   className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31A382] transition-all duration-300"
//                   placeholder="Confirm your password"
//                   required
//                 />
//               </div>
//               {errors.confirmPassword && (
//                 <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
//               )}
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-[#31A382] text-white font-semibold rounded-md hover:bg-[#2F9B7A] transition-colors duration-300 sm:col-span-2"
//             >
//               Register
//             </button>
//           </motion.form>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default LoginRegister;




// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FcGoogle } from 'react-icons/fc';
// import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlinePhone } from 'react-icons/hi';

// interface LoginFormData {
//   email: string;
//   password: string;
// }

// interface RegisterFormData {
//   name: string;
//   email: string;
//   mobile: string;
//   password: string;
//   confirmPassword: string;
// }

// interface FormErrors {
//   name?: string;
//   email?: string;
//   mobile?: string;
//   password?: string;
//   confirmPassword?: string;
// }

// const LoginRegister: React.FC = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [loginForm, setLoginForm] = useState<LoginFormData>({ email: '', password: '' });
//   const [registerForm, setRegisterForm] = useState<RegisterFormData>({
//     name: '',
//     email: '',
//     mobile: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [errors, setErrors] = useState<FormErrors>({});

//   // Handle login form input changes
//   const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setLoginForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle register form input changes
//   const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setRegisterForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // Validate login form
//   const validateLogin = (): boolean => {
//     const newErrors: FormErrors = {};
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginForm.email)) newErrors.email = 'Invalid email address';
//     if (!loginForm.password) newErrors.password = 'Password is required';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Validate register form
//   const validateRegister = (): boolean => {
//     const newErrors: FormErrors = {};
//     if (!registerForm.name.trim()) newErrors.name = 'Name is required';
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerForm.email)) newErrors.email = 'Invalid email address';
//     if (!/^\d{10}$/.test(registerForm.mobile)) newErrors.mobile = 'Mobile must be 10 digits';
//     if (registerForm.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     if (registerForm.password !== registerForm.confirmPassword)
//       newErrors.confirmPassword = 'Passwords do not match';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle login submission
//   const handleLoginSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateLogin()) {
//       console.log('Login submitted:', loginForm);
//       setLoginForm({ email: '', password: '' });
//       setErrors({});
//     }
//   };

//   // Handle register submission
//   const handleRegisterSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateRegister()) {
//       console.log('Register submitted:', registerForm);
//       setRegisterForm({ name: '', email: '', mobile: '', password: '', confirmPassword: '' });
//       setErrors({});
//       setIsLogin(true); // Switch to login after successful registration
//     }
//   };

//   // Handle Google login (placeholder)
//   const handleGoogleLogin = () => {
//     console.log('Initiating Google login...');
//     // TODO: Implement Google OAuth (e.g., Firebase)
//   };

//   // Animation variants
//   const formVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
//     exit: { opacity: 0, y: -10, transition: { duration: 0.4 } },
//   };

//   return (
//     <motion.div
//       className="max-w-md w-full mx-auto p-8 bg-white rounded-2xl shadow-lg"
//       initial={{ opacity: 0, scale: 0.98 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Tabs */}
//       <div className="flex justify-center mb-6 bg-gray-100 rounded-full p-1">
//         <button
//           className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all duration-300 ${
//             isLogin
//               ? 'bg-[#31A382] text-white shadow-sm'
//               : 'text-gray-600 hover:text-[#015F4A]'
//           }`}
//           onClick={() => setIsLogin(true)}
//           aria-label="Switch to Login"
//         >
//           Login
//         </button>
//         <button
//           className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all duration-300 ${
//             !isLogin
//               ? 'bg-[#31A382] text-white shadow-sm'
//               : 'text-gray-600 hover:text-[#015F4A]'
//           }`}
//           onClick={() => setIsLogin(false)}
//           aria-label="Switch to Register"
//         >
//           Register
//         </button>
//       </div>

//       <AnimatePresence mode="wait">
//         {isLogin ? (
//           <motion.form
//             key="login"
//             onSubmit={handleLoginSubmit}
//             variants={formVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="space-y-4"
//           >
//             <div className="relative">
//               <div className="relative">
//                 <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={loginForm.email}
//                   onChange={handleLoginChange}
//                   className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31A382] focus:border-transparent transition-all duration-300 text-sm"
//                   placeholder="Email address"
//                   required
//                   aria-label="Email address"
//                 />
//               </div>
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>
//             <div className="relative">
//               <div className="relative">
//                 <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={loginForm.password}
//                   onChange={handleLoginChange}
//                   className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31A382] focus:border-transparent transition-all duration-300 text-sm"
//                   placeholder="Password"
//                   required
//                   aria-label="Password"
//                 />
//               </div>
//               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2.5 px-4 bg-[#31A382] text-white font-medium rounded-lg hover:bg-[#2F9B7A] transition-all duration-300 text-sm"
//               aria-label="Login"
//             >
//               Login
//             </button>
//             <button
//               type="button"
//               onClick={handleGoogleLogin}
//               className="w-full py-2.5 px-4 bg-white text-gray-700 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
//               aria-label="Login with Google"
//             >
//               <FcGoogle size={18} />
//               Login with Google
//             </button>
//           </motion.form>
//         ) : (
//           <motion.form
//             key="register"
//             onSubmit={handleRegisterSubmit}
//             variants={formVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="space-y-3"
//           >
//             <div className="relative">
//               <div className="relative">
//                 <HiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={registerForm.name}
//                   onChange={handleRegisterChange}
//                   className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31A382] focus:border-transparent transition-all duration-300 text-sm"
//                   placeholder="Full name"
//                   required
//                   aria-label="Full name"
//                 />
//               </div>
//               {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//             </div>
//             <div className="relative">
//               <div className="relative">
//                 <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={registerForm.email}
//                   onChange={handleRegisterChange}
//                   className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31A382] focus:border-transparent transition-all duration-300 text-sm"
//                   placeholder="Email address"
//                   required
//                   aria-label="Email address"
//                 />
//               </div>
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>
//             <div className="relative">
//               <div className="relative">
//                 <HiOutlinePhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="tel"
//                   id="mobile"
//                   name="mobile"
//                   value={registerForm.mobile}
//                   onChange={handleRegisterChange}
//                   className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31A382] focus:border-transparent transition-all duration-300 text-sm"
//                   placeholder="Mobile number"
//                   required
//                   aria-label="Mobile number"
//                 />
//               </div>
//               {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
//             </div>
//             <div className="relative">
//               <div className="relative">
//                 <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={registerForm.password}
//                   onChange={handleRegisterChange}
//                   className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31A382] focus:border-transparent transition-all duration-300 text-sm"
//                   placeholder="Password"
//                   required
//                   aria-label="Password"
//                 />
//               </div>
//               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//             </div>
//             <div className="relative">
//               <div className="relative">
//                 <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={registerForm.confirmPassword}
//                   onChange={handleRegisterChange}
//                   className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31A382] focus:border-transparent transition-all duration-300 text-sm"
//                   placeholder="Confirm password"
//                   required
//                   aria-label="Confirm password"
//                 />
//               </div>
//               {errors.confirmPassword && (
//                 <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
//               )}
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2.5 px-4 bg-[#31A382] text-white font-medium rounded-lg hover:bg-[#2F9B7A] transition-all duration-300 text-sm"
//               aria-label="Register"
//             >
//               Register
//             </button>
//           </motion.form>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default LoginRegister;




// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FcGoogle } from 'react-icons/fc';
// import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlinePhone } from 'react-icons/hi';

// interface LoginFormData {
//   email: string;
//   password: string;
// }

// interface RegisterFormData {
//   name: string;
//   email: string;
//   mobile: string;
//   password: string;
//   confirmPassword: string;
// }

// interface FormErrors {
//   name?: string;
//   email?: string;
//   mobile?: string;
//   password?: string;
//   confirmPassword?: string;
// }

// const LoginRegister: React.FC = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [loginForm, setLoginForm] = useState<LoginFormData>({ email: '', password: '' });
//   const [registerForm, setRegisterForm] = useState<RegisterFormData>({
//     name: '',
//     email: '',
//     mobile: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [errors, setErrors] = useState<FormErrors>({});
//   const loginRef = useRef<HTMLButtonElement>(null);
//   const registerRef = useRef<HTMLButtonElement>(null);
//   const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

//   // Update underline position and width based on active toggle
//   useEffect(() => {
//     const activeRef = isLogin ? loginRef : registerRef;
//     if (activeRef.current) {
//       const { offsetLeft, offsetWidth } = activeRef.current;
//       setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
//     }
//   }, [isLogin]);

//   // Handle login form input changes
//   const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setLoginForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle register form input changes
//   const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setRegisterForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // Validate login form
//   const validateLogin = (): boolean => {
//     const newErrors: FormErrors = {};
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginForm.email)) newErrors.email = 'Invalid email';
//     if (!loginForm.password) newErrors.password = 'Password required';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Validate register form
//   const validateRegister = (): boolean => {
//     const newErrors: FormErrors = {};
//     if (!registerForm.name.trim()) newErrors.name = 'Name required';
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerForm.email)) newErrors.email = 'Invalid email';
//     if (!/^\d{10}$/.test(registerForm.mobile)) newErrors.mobile = '10 digits required';
//     if (registerForm.password.length < 6) newErrors.password = 'Min 6 characters';
//     if (registerForm.password !== registerForm.confirmPassword)
//       newErrors.confirmPassword = 'Passwords mismatch';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle login submission
//   const handleLoginSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateLogin()) {
//       console.log('Login submitted:', loginForm);
//       setLoginForm({ email: '', password: '' });
//       setErrors({});
//     }
//   };

//   // Handle register submission
//   const handleRegisterSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateRegister()) {
//       console.log('Register submitted:', registerForm);
//       setRegisterForm({ name: '', email: '', mobile: '', password: '', confirmPassword: '' });
//       setErrors({});
//       setIsLogin(true); // Switch to login after registration
//     }
//   };

//   // Handle Google login (placeholder)
//   const handleGoogleLogin = () => {
//     console.log('Initiating Google login...');
//     // TODO: Implement Google OAuth (e.g., Firebase)
//   };

//   // Animation variants
//   const formVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
//     exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
//   };

//   // Underline animation
//   const underlineVariants = {
//     login: { left: underlineStyle.left, width: underlineStyle.width },
//     register: { left: underlineStyle.left, width: underlineStyle.width },
//   };

//   return (
//     <motion.div
//       className="max-w-sm w-full mx-auto p-6 bg-white rounded-xl shadow-md"
//       initial={{ opacity: 0, scale: 0.98 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.4 }}
//     >
//       {/* Toggle Header */}
//       <div className="flex justify-center mb-6 relative">
//         <div className="flex space-x-8">
//           <button
//             ref={loginRef}
//             className={`text-sm font-semibold ${isLogin ? 'text-[#31A382]' : 'text-gray-500 hover:text-[#015F4A]'}`}
//             onClick={() => setIsLogin(true)}
//             aria-label="Switch to Login"
//           >
//             Login
//           </button>
//           <button
//             ref={registerRef}
//             className={`text-sm font-semibold ${!isLogin ? 'text-[#31A382]' : 'text-gray-500 hover:text-[#015F4A]'}`}
//             onClick={() => setIsLogin(false)}
//             aria-label="Switch to Register"
//           >
//             Register
//           </button>
//         </div>
//         <motion.div
//           className="absolute bottom-0 h-1 bg-[#31A382] rounded-full"
//           variants={underlineVariants}
//           animate={isLogin ? 'login' : 'register'}
//           initial={false}
//           transition={{ duration: 0.4, ease: 'easeInOut' }}
//           style={{ left: underlineStyle.left, width: underlineStyle.width }}
//         />
//       </div>

//       <AnimatePresence mode="wait">
//         {isLogin ? (
//           <motion.form
//             key="login"
//             onSubmit={handleLoginSubmit}
//             variants={formVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="space-y-2"
//           >
//             <div className="relative">
//               <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={loginForm.email}
//                 onChange={handleLoginChange}
//                 className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#31A382] focus:border-transparent text-sm transition-all duration-200"
//                 placeholder="Email address"
//                 required
//                 aria-label="Email address"
//               />
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>
//             <div className="relative">
//               <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={loginForm.password}
//                 onChange={handleLoginChange}
//                 className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#31A382] focus:border-transparent text-sm transition-all duration-200"
//                 placeholder="Password"
//                 required
//                 aria-label="Password"
//               />
//               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-[#31A382] text-white font-medium rounded-lg hover:bg-[#2F9B7A] transition-all duration-200 text-sm"
//               aria-label="Login"
//             >
//               Login
//             </button>
//             <button
//               type="button"
//               onClick={handleGoogleLogin}
//               className="w-full py-2 px-4 bg-white text-gray-600 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2 text-sm"
//               aria-label="Login with Google"
//             >
//               <FcGoogle size={16} />
//               Login with Google
//             </button>
//           </motion.form>
//         ) : (
//           <motion.form
//             key="register"
//             onSubmit={handleRegisterSubmit}
//             variants={formVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="space-y-2"
//           >
//             <div className="relative">
//               <HiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={registerForm.name}
//                 onChange={handleRegisterChange}
//                 className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#31A382] focus:border-transparent text-sm transition-all duration-200"
//                 placeholder="Full name"
//                 required
//                 aria-label="Full name"
//               />
//               {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//             </div>
//             <div className="relative">
//               <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={registerForm.email}
//                 onChange={handleRegisterChange}
//                 className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#31A382] focus:border-transparent text-sm transition-all duration-200"
//                 placeholder="Email address"
//                 required
//                 aria-label="Email address"
//               />
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>
//             <div className="relative">
//               <HiOutlinePhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
//               <input
//                 type="tel"
//                 id="mobile"
//                 name="mobile"
//                 value={registerForm.mobile}
//                 onChange={handleRegisterChange}
//                 className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#31A382] focus:border-transparent text-sm transition-all duration-200"
//                 placeholder="Mobile number"
//                 required
//                 aria-label="Mobile number"
//               />
//               {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
//             </div>
//             <div className="relative">
//               <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={registerForm.password}
//                 onChange={handleRegisterChange}
//                 className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#31A382] focus:border-transparent text-sm transition-all duration-200"
//                 placeholder="Password"
//                 required
//                 aria-label="Password"
//               />
//               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//             </div>
//             <div className="relative">
//               <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 value={registerForm.confirmPassword}
//                 onChange={handleRegisterChange}
//                 className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#31A382] focus:border-transparent text-sm transition-all duration-200"
//                 placeholder="Confirm password"
//                 required
//                 aria-label="Confirm password"
//               />
//               {errors.confirmPassword && (
//                 <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
//               )}
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-[#31A382] text-white font-medium rounded-lg hover:bg-[#2F9B7A] transition-all duration-200 text-sm"
//               aria-label="Register"
//             >
//               Register
//             </button>
//           </motion.form>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default LoginRegister;.



import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlinePhone } from 'react-icons/hi';

interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData {
  name: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  password?: string;
  confirmPassword?: string;
}

const LoginRegister: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginForm, setLoginForm] = useState<LoginFormData>({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState<RegisterFormData>({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const loginRef = useRef<HTMLButtonElement>(null);
  const registerRef = useRef<HTMLButtonElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  // Update underline position and width
  useEffect(() => {
    const activeRef = isLogin ? loginRef : registerRef;
    if (activeRef.current) {
      const { offsetLeft, offsetWidth } = activeRef.current;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [isLogin]);

  // Handle login form input changes
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle register form input changes
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  // Validate login form
  const validateLogin = (): boolean => {
    const newErrors: FormErrors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginForm.email)) newErrors.email = 'Invalid email';
    if (!loginForm.password) newErrors.password = 'Password required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate register form
  const validateRegister = (): boolean => {
    const newErrors: FormErrors = {};
    if (!registerForm.name.trim()) newErrors.name = 'Name required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerForm.email)) newErrors.email = 'Invalid email';
    if (!/^\d{10}$/.test(registerForm.mobile)) newErrors.mobile = '10 digits required';
    if (registerForm.password.length < 6) newErrors.password = 'Min 6 characters';
    if (registerForm.password !== registerForm.confirmPassword)
      newErrors.confirmPassword = 'Passwords mismatch';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle login submission
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateLogin()) {
      console.log('Login submitted:', loginForm);
      setLoginForm({ email: '', password: '' });
      setErrors({});
    }
  };

  // Handle register submission
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateRegister()) {
      console.log('Register submitted:', registerForm);
      setRegisterForm({ name: '', email: '', mobile: '', password: '', confirmPassword: '' });
      setErrors({});
      setIsLogin(true); // Switch to login after registration
    }
  };

  // Handle Google login (placeholder)
  const handleGoogleLogin = () => {
    console.log('Initiating Google login...');
    // TODO: Implement Google OAuth (e.g., Firebase)
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  // Underline animation
  const underlineVariants = {
    login: { left: underlineStyle.left, width: underlineStyle.width },
    register: { left: underlineStyle.left, width: underlineStyle.width },
  };

  return (
    <motion.div
      className="max-w-md w-full mx-auto p-6 bg-white rounded-xl shadow-md"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Toggle Header */}
      <div className="flex justify-center mb-6 relative">
        <div className="flex space-x-10">
          <button
            ref={loginRef}
            className={`text-base font-semibold ${isLogin ? 'text-[#015F4A]' : 'text-gray-500 hover:text-[#31A382]'}`}
            onClick={() => setIsLogin(true)}
            aria-label="Switch to Login"
          >
            Login
          </button>
          <button
            ref={registerRef}
            className={`text-base font-semibold ${!isLogin ? 'text-[#015F4A]' : 'text-gray-500 hover:text-[#31A382]'}`}
            onClick={() => setIsLogin(false)}
            aria-label="Switch to Register"
          >
            Register
          </button>
        </div>
        <motion.div
          className="absolute bottom-0 h-1 bg-[#31A382] rounded-full"
          variants={underlineVariants}
          animate={isLogin ? 'login' : 'register'}
          initial={false}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{ left: underlineStyle.left, width: underlineStyle.width }}
        />
      </div>

      <AnimatePresence mode="wait">
        {isLogin ? (
          <motion.form
            key="login"
            onSubmit={handleLoginSubmit}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-3"
          >
            <div className="relative">
              <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                id="email"
                name="email"
                value={loginForm.email}
                onChange={handleLoginChange}
                className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#31A382] focus:border-transparent text-sm transition-all duration-200"
                placeholder="Email address"
                required
                aria-label="Email address"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="relative">
              <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="password"
                id="password"
                name="password"
                value={loginForm.password}
                onChange={handleLoginChange}
                className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#31A382] focus:border-transparent text-sm transition-all duration-200"
                placeholder="Password"
                required
                aria-label="Password"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-[#31A382] text-white font-medium rounded-lg hover:bg-[#2F9B7A] transition-all duration-200 text-sm"
              aria-label="Login"
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full py-2.5 px-4 bg-white text-gray-600 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2 text-sm"
              aria-label="Login with Google"
            >
              <FcGoogle size={18} />
              Login with Google
            </button>
          </motion.form>
        ) : (
          <motion.form
            key="register"
            onSubmit={handleRegisterSubmit}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-3"
          >
            <div className="relative">
              <HiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                id="name"
                name="name"
                value={registerForm.name}
                onChange={handleRegisterChange}
                className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#31A382] focus:border-transparent text-sm transition-all duration-200"
                placeholder="Full name"
                required
                aria-label="Full name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div className="relative">
              <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                id="email"
                name="email"
                value={registerForm.email}
                onChange={handleRegisterChange}
                className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#31A382] focus:border-transparent text-sm transition-all duration-200"
                placeholder="Email address"
                required
                aria-label="Email address"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="relative">
              <HiOutlinePhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={registerForm.mobile}
                onChange={handleRegisterChange}
                className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#31A382] focus:border-transparent text-sm transition-all duration-200"
                placeholder="Mobile number"
                required
                aria-label="Mobile number"
              />
              {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
            </div>
            <div className="relative">
              <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="password"
                id="password"
                name="password"
                value={registerForm.password}
                onChange={handleRegisterChange}
                className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#31A382] focus:border-transparent text-sm transition-all duration-200"
                placeholder="Password"
                required
                aria-label="Password"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <div className="relative">
              <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={registerForm.confirmPassword}
                onChange={handleRegisterChange}
                className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#31A382] focus:border-transparent text-sm transition-all duration-200"
                placeholder="Confirm password"
                required
                aria-label="Confirm password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-[#31A382] text-white font-medium rounded-lg hover:bg-[#2F9B7A] transition-all duration-200 text-sm"
              aria-label="Register"
            >
              Register
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LoginRegister;