import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Link, NavLink for Router
import { Link, NavLink } from 'react-router-dom';
// Import axios for get data
import axios from 'axios';
// Import Style
import { Aside, LinkWrapper, Arrow, TitleWrapper } from './SideBar.styled';
// Import dispatch functions
import {
  handleCategory,
  setCategory,
  dataReset,
} from '../../store/dispatchFuncs';
// Import API Url
import { API_MAIN_URL } from '../../config/serverApi';

const SideBar = () => {
  const [sidebarMove, setSidebarMove] = useState(false);
  const dispatch = useDispatch();

  const catCategories = useSelector(function (state) {
    return state.currentCatsState.categoryData;
  });

  useEffect(() => {
    if (catCategories.length === 0) {
      const apiUrlCategory = `${API_MAIN_URL}categories`;
      axios
        .get(apiUrlCategory)
        .then((response) => {
          const category = response.data;
          dispatch(setCategory(category));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line
  }, []);

  const clickMove = (e) => {
    setSidebarMove(!sidebarMove);
  };

  return (
    <Aside className={sidebarMove ? `sidebar open` : `sidebar close`}>
      <TitleWrapper>
        <Link
          to={`/`}
          onClick={() => {
            dispatch(dataReset());
            clickMove();
          }}
        >
          <p>CATS IMG</p>
        </Link>
        <p>Category</p>
      </TitleWrapper>
      <LinkWrapper>
        {catCategories &&
          catCategories.map((category) => {
            const { id, name } = category;
            return (
              <NavLink
                key={id}
                to={`category/${name}/${id}`}
                onClick={() => {
                  dispatch(handleCategory(id));
                  clickMove();
                }}
              >
                {name}
              </NavLink>
            );
          })}
      </LinkWrapper>
      <Arrow onClick={() => clickMove()}>
        <p>
          <i className={sidebarMove ? `arrow left` : `arrow right`}></i>
        </p>
      </Arrow>
    </Aside>
  );
};

export { SideBar };
