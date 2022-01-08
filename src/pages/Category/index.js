import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Import useParams for Router
import { useParams } from 'react-router-dom';
// Import axios for get data
import axios from 'axios';
// Import Style
import { Section } from './Category.styled';

// Import Components
import { Grid } from '../../components/Grid';
import { ArticleImg } from '../../components/Article';
import { LoadMore } from '../../components/LoadMore/';
import { Loading } from '../../components/Loading';

// Import API Url
import { API_MAIN_URL } from '../../config/serverApi';

import {
  handleMemory,
  handleContent,
  handleCategory,
} from '../../store/dispatchFuncs';

const imagesSearch = `images/search?`;
const searchUrl = `${API_MAIN_URL}${imagesSearch}`;
const Category = () => {
  const dispatch = useDispatch();

  const imageLimit = useSelector(function (state) {
    return `limit=${state.currentCatsState.limit}`;
  });

  const page = useSelector(function (state) {
    return state.currentCatsState.page;
  });

  const catsInfo = useSelector(function (state) {
    return state.currentCatsState.cats;
  });

  const catsId = useSelector(function (state) {
    return state.currentCatsState.id;
  });

  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const trackId = id || catsId;

  useEffect(() => {
    dispatch(handleCategory(trackId));
    //eslint-disable-next-line
  }, [trackId]);

  const urlPage = `&page=${page}`;
  const categoryId = `&category_ids=${trackId}`;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${searchUrl}${imageLimit}${urlPage}${categoryId}`)
      .then((resp) => {
        dispatch(handleMemory(resp.data));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
    // eslint-disable-next-line
  }, [categoryId, urlPage, imageLimit]);

  return (
    <>
      <Section>
        <Grid>
          {catsInfo.map((cat, index) => {
            const { id, url } = cat;
            return <ArticleImg key={index} id={id} url={url} />;
          })}
        </Grid>
        {isLoading && <Loading />}
        <LoadMore
          handleContent={() => dispatch(handleContent())}
          title="load more"
        />
      </Section>
    </>
  );
};

export default Category;
