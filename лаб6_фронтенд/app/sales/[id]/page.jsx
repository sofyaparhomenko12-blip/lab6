'use client';
import { useParams } from 'next/navigation';

const SaleDetailPage = async () => {
    const params = useParams();
      const { id } = params;

    return (
        <>
            <p>{id}</p>
        </>
    )
}

export default SaleDetailPage;