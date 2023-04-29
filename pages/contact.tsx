import Layout from "components/Layout"
import GetInTouch from "components/GetInTouch"
import useSWR from 'swr';
import axios from "axios";
import { ContactInformationProps } from "types/ContactInformation";

const fetcher = (url: string) => axios.get(url).then(response => response.data);

export default function Contact(): JSX.Element | false {
  const { data, isLoading, error } = useSWR<ContactProps, Error>('api/contactpage', fetcher);

  if (isLoading || error) return false;

  return (
    <Layout title="Hivemind - Contact">
      <GetInTouch contactInformations={data.contactInformations} />
    </Layout>
  )
}

type ContactProps = {
  contactInformations: ContactInformationProps[]
}