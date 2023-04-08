import axios from 'axios';

export async function getServerSideProps(context) {
    let slug = context.params.slug
    let base_url = process.env.NEXT_PUBLIC_BASE_URL;

 const res = await axios.get(`https://fascolor.onrender.com` + '/get-product/' +     `${slug}`);
  const data = res.data;

  return {
    props: {
      data,
    },
  };
}


