import { Fragment } from "react";

export default function MealsDetailPage({ params }) {
  return (
    <Fragment>
      <h1>MealsDetailPage</h1>
      <p>{params.mealsSlug}</p>
    </Fragment>
  );
}