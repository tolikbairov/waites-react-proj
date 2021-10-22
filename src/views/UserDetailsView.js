import { Redirect, useParams } from "react-router-dom";

export default function UserDetailsView(props) {
  const { userId } = useParams();
  if (!props.location.propsSearch) return <Redirect to="/tabledata" />;
  const { title } = props.location.propsSearch;
  console.log(props.location.propsSearch.title); // Наши переданные данные
  //Но учтите, что они будут доступны только, при переходе по этой ссылке.
  //Если страницу перезагрузить, то получим - undefined.
  //Это решается редиректом обратно, если нет пропса:

  return (
    <>
      <h1>title:{title}</h1>
      <p>lorem ipsum</p>
    </>
  );
}
