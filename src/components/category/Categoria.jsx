import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../redux/categories/categories-actions';
import { EachCategoryContainer, IMGCategory, TextStyled } from './CategoryStyles'

export const Categoria = ({id, img,title,category}) => {
  const dispatch= useDispatch();
  const {selectedCategory}= useSelector(state=>state.categories)
  return (
    <EachCategoryContainer
          selected={selectedCategory===category}
          onClick={e=>dispatch(
            selectCategory(category)
            )}
        >
          <TextStyled>{title}</TextStyled>
          <IMGCategory 
          src={img}
          alt={title}
          whileTap={{scale:0.9}}
          >
          </IMGCategory>
        </EachCategoryContainer>

  )
}
