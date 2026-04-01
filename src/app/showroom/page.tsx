import type { Metadata } from 'next';
import ShowroomContent from '../../components/showroom/ShowroomContent';

export const metadata: Metadata = {
  title: 'Virtual Showroom',
  description: 'Explore our 3D virtual showroom and interactive interior models.',
};

export default function ShowroomPage() {
  return <ShowroomContent />;
}