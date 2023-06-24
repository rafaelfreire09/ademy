import { useAppSelector } from 'hooks/redux';
import * as S from './styles';

import EbookDashboardCard from 'components/EbookDashboardCard';
import { useEffect, useState } from 'react';
import { GetEbooksPurchased } from 'services/user';

import { EbooksTypeAPI } from 'types/types';
import { getLocalStorage } from 'utils/localStorage';

export type DashboardViewProps = {};

export default function DashboardView() {
  const [ebookDashboardList, setEbookDashboardList] = useState<
    EbooksTypeAPI[] | null
  >([]);

  useEffect(() => {
    const getEbooks = async () => {
      const list = await GetEbooksPurchased(getLocalStorage('userId'));

      setEbookDashboardList(list);
    };

    getEbooks();
  }, []);

  return (
    <S.Wrapper>
      <S.TitleSection>Ebooks Adquiridos</S.TitleSection>
      <S.PurchasedContent>
        {ebookDashboardList?.map((ebook) => (
          <EbookDashboardCard
            key={ebook.EbookID}
            id={ebook.EbookID}
            title={ebook.Title}
            image={ebook.Image}
            author={ebook.Author}
            price={ebook.Price}
            description={ebook.Description}
            slug={ebook.Slug}
          />
        ))}
      </S.PurchasedContent>
    </S.Wrapper>
  );
}
