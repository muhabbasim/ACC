import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';

import ChildCard from 'src/components/shared/ChildCard';
import UserFilter from 'src/Acc_components/users/UserFilter';
import UserListing from 'src/Acc_components/users/UserListing';
import { useTranslation } from 'react-i18next';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Users',
  },
];

const TicketList = () => {
  const { t } = useTranslation();

  return (
    <PageContainer title="ACC Users" description="this is user page">
      <Breadcrumb title={<>{t('ACC Users')}</>} items={BCrumb} />
      <ChildCard>
        <UserFilter />
        <UserListing />
      </ChildCard>
    </PageContainer>
  );
};

export default TicketList;
