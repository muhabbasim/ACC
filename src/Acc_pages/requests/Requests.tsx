import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import RequestListing from 'src/Acc_components/requests/request_table_list/RequestListing';
import ChildCard from 'src/components/shared/ChildCard';
import { useTranslation } from 'react-i18next';



const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Requests',
  },
];

const Requests = () => {
  const { t } = useTranslation();

  return (
    <PageContainer title="ACC Requests" description="this is request page">
      <Breadcrumb title={t("Requests")} items={BCrumb} />
      <ChildCard>
        <RequestListing />
      </ChildCard>
    </PageContainer>
  );
};

export default Requests;
