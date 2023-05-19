import * as S from './styles';

import EbookDashboardCard from 'components/EbookDashboardCard';

import { Ebook } from 'types/types';

export type DashboardViewProps = {
  ebookDashboardList: Ebook[];
};

export default function DashboardView({
  ebookDashboardList,
}: DashboardViewProps) {
  return (
    <S.Wrapper>
      <S.TitleSection>Ebooks Adquiridos</S.TitleSection>
      <S.PurchasedContent>
        {ebookDashboardList.map((ebook) => (
          <EbookDashboardCard {...ebook} key={ebook.id} />
        ))}
      </S.PurchasedContent>
    </S.Wrapper>
  );
}
