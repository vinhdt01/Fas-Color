import axios from 'axios';

export async function getServerSideProps(context) {
//     let slug = context.params.slug
//     let base_url = process.env.BASE_URL;
//     ;
//  const res = await axios.get(`${base_url}` + '/get-product/' +     `${slug}`);
//   const data = res.data;
 const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
  const data = res.data;

  return {
    props: {
      data:data,
    },
  };
}


