// import {
//     Star,
//     Heart,
//     Sun,
//     Users,
//     Award,
//     Clock,
//     Users as UsersIcon,
//     Monitor,
//     Target,
//     HeartHandshake,
//     Brain,
//     AlertTriangle,
//     Frown,
//     Bed,
//     Apple,
//     Dumbbell,
//   } from 'lucide-react';
//   import SelfImage from '../assets/Self-Confidence.jpg';
//   import StressImage from '../assets/stress.jpg';
//   import AnxietyImage from '../assets/Anxiety.jpg';
//   import DepressionImage from '../assets/Depression.jpg';
//   import SleepImage from '../assets/Sleep-hygine.jpg';
//   import UnhealthyImage from '../assets/Unhealthy-diet.jpg';
//   import LackImage from '../assets/Lack-of-Physical-activity.jpg';
//   import Substance from '../assets/Substance-abuse.jpg';
//   import WorkImage from '../assets/Worklife-balance.jpg';
//   import SocialImage from '../assets/Social-connection.jpg';
//   import DigitalImage from '../assets/Digital-overloaded.jpg';
//   import GoalImage from '../assets/Goal-direction.jpg';
//   import EmotionalImage from '../assets/Emotional-need.jpg';
//   import RelationshipImage from '../assets/Relationship.jpg';
//   import YogaImage from '../assets/yoga.png';
//   import MindfulImage from '../assets/mindfulGuide.jpg';
//   import EmotionalWellImage from '../assets/emotional.jpg';
//   import ProfileImageOne from '../assets/consultant1.jpg';
//   import ProfileImageTwo from '../assets/consultant2.jpg';
//   import ProfileImageThree from '../assets/consultant3.jpg';
//   import { Consultant, TherapyImprovement, Book, NavItem } from '../types/types';
  
//   export const consultants: Consultant[] = [
//     {
//       name: 'Rajeev P',
//       qualification: 'MSc Clinical Psychology & Diploma in Art Therapy',
//       expertise: ['Workplace Stress', 'Family Therapy', 'Relationships', 'Anxiety Management'],
//       languages: ['Malayalam', 'English', 'Hindi'],
//       counseling: ['Individual'],
//       image: ProfileImageThree,
//     },
//     {
//       name: 'Sapna Sharma',
//       qualification: 'MA in Psychology',
//       expertise: ['Emotional Regulation', 'Depression', 'Stress Management', 'Confidence Building'],
//       languages: ['English', 'Hindi'],
//       counseling: ['Individual'],
//       image: ProfileImageTwo,
//     },
//     {
//       name: 'Varsha Patel',
//       qualification: 'MPhil Clinical Psychology & MDMP',
//       expertise: ['ADHD', 'Addiction Recovery', 'Depression', 'Grief Counseling'],
//       languages: ['English', 'Tamil', 'Hindi'],
//       counseling: ['Individual', 'Couple'],
//       image: ProfileImageOne,
//     },
//   ];
  
//   export const therapyImprovements: TherapyImprovement[] = [
//     {
//       title: 'Self Confidence',
//       desc: 'Self-confidence means believing in yourself and your abilities. It’s about trusting your own decisions, knowing your strengths and weaknesses, and feeling in control of your life.',
//       icon: <Star style={{ color: '#31A382' }} />,
//       bgImage: SelfImage,
//     },
//     {
//       title: 'Stress',
//       desc: 'Psychological stress is the way our mind and body respond to pressure or challenges, whether they come from inside us or from the world around us. It happens when we feel off balance or overwhelmed.',
//       icon: <Brain style={{ color: '#31A382' }} />,
//       bgImage: StressImage,
//     },
//     {
//       title: 'Anxiety',
//       desc: 'Anxiety is a common emotion, and it can cause physical symptoms, such as shaking and sweating. When anxiety becomes persistent or excessive, a person may have an anxiety disorder.',
//       icon: <AlertTriangle style={{ color: '#31A382' }} />,
//       bgImage: AnxietyImage,
//     },
//     {
//       title: 'Depression',
//       desc: 'Depression is a common and serious mental disorder that negatively affects how you feel, think, act, and perceive the world.',
//       icon: <Frown style={{ color: '#31A382' }} />,
//       bgImage: DepressionImage,
//     },
//     {
//       title: 'Sleep Hygiene',
//       desc: 'Sleep hygiene means having good habits and routines that help you sleep well. It includes things like going to bed at the same time each night, keeping your bedroom quiet and comfortable, and avoiding screens or caffeine before bed.',
//       icon: <Bed style={{ color: '#31A382' }} />,
//       bgImage: SleepImage,
//     },
//     {
//       title: 'Unhealthy Diet',
//       desc: 'An unhealthy diet is when someone eats too many foods that are high in calories, sugar, unhealthy fats, and salt, but low in important nutrients like vitamins, minerals, and fiber.',
//       icon: <Apple style={{ color: '#31A382' }} />,
//       bgImage: UnhealthyImage,
//     },
//     {
//       title: 'Lack of Physical Activity',
//       desc: 'Lack of physical activity, or physical inactivity, refers to not engaging in enough moderate to vigorous exercise to support good health.',
//       icon: <Dumbbell style={{ color: '#31A382' }} />,
//       bgImage: LackImage,
//     },
//     {
//       title: 'Substance Abuse',
//       desc: 'The use of illegal drugs or the use of prescription or over-the-counter drugs or alcohol for purposes other than those for which they are meant to be used, or in excessive amounts.',
//       icon: <Award style={{ color: '#31A382' }} />,
//       bgImage: Substance,
//     },
//     {
//       title: 'Work Life Balance',
//       desc: 'Work-life balance means finding a healthy mix between your job and personal life. It’s about managing your time and energy so you can do your work, take care of your personal responsibilities, and still have time to rest and enjoy life.',
//       icon: <Clock style={{ color: '#31A382' }} />,
//       bgImage: WorkImage,
//     },
//     {
//       title: 'Social Connection',
//       desc: 'Social connection refers to the quality and quantity of relationships we have with others, encompassing a feeling of belonging and being cared for. It’s a fundamental human need, crucial for well-being and even physical health.',
//       icon: <UsersIcon style={{ color: '#31A382' }} />,
//       bgImage: SocialImage,
//     },
//     {
//       title: 'Digital Overload',
//       desc: 'Digital overload describes the feeling of being overwhelmed by the vast amount of digital information and interactions we encounter daily.',
//       icon: <Monitor style={{ color: '#31A382' }} />,
//       bgImage: DigitalImage,
//     },
//     {
//       title: 'Goal Direction',
//       desc: 'Goal direction means having a clear purpose and working toward it. It’s about planning your actions and making choices that help you reach a specific goal.',
//       icon: <Target style={{ color: '#31A382' }} />,
//       bgImage: GoalImage,
//     },
//     {
//       title: 'Emotional Need',
//       desc: 'Emotional needs are the feelings and support we need to feel happy and fulfilled. When these needs are met, we feel good about ourselves and our lives. If they’re not met, we might feel sad, frustrated, or lonely.',
//       icon: <Heart style={{ color: '#31A382' }} />,
//       bgImage: EmotionalImage,
//     },
//     {
//       title: 'Relationship',
//       desc: 'Relationships play a crucial role in human well-being and personal growth, making them an essential part of our lives.',
//       icon: <HeartHandshake style={{ color: '#31A382' }} />,
//       bgImage: RelationshipImage,
//     },
//   ];
  
//   export const books: Book[] = [
//     { title: 'Mindfulness Guide', desc: 'Live in the moment.', image: MindfulImage },
//     { title: 'Yoga for Peace', desc: 'Find calm through movement.', image: YogaImage },
//     { title: 'Emotional Wellness', desc: 'Understand your emotions.', image: EmotionalWellImage },
//   ];
  
//   export const navItems: NavItem[] = [
//     { name: 'Who Joined With Melete', items: ['Child', 'Parent', 'Pregnant', 'Adult', 'Old Age'] },
//     { name: 'Relaxation For', items: ['Anger Issues', 'Depression', 'Mood Swings', 'Stress', 'Anxiety'] },
//     { name: 'Habit Vault', items: ['Todo-List', 'Goal Setting', 'Habit Formation', 'Wellness Activities'] },
//     { name: 'Blog', href: '/blog' },
//     { name: 'Login', href: '/login' },
//     { name: 'Contact', href: '/contact' },
//   ];