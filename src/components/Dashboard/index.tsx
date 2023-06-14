import * as S from './styles';

import EbookDashboardCard from 'components/EbookDashboardCard';

import { EbooksTypeAPI } from 'types/types';

export type DashboardViewProps = {
  ebookDashboardList: EbooksTypeAPI[] | null;
};

export default function DashboardView({
  ebookDashboardList,
}: DashboardViewProps) {
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
