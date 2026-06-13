import GenericPage from '../components/layout/GenericPage';
import { useParams } from 'react-router-dom';

export default function ServiceDetail() {
  const { id } = useParams();
  return <GenericPage title={`Service Component: ${id}`} subtitle="Detailed breakdown of this specific growth system and how it applies to filling gyms." />;
}
