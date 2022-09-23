import React from 'react'
import {CategoryContainer} from '../category/CategoryStyles'
import {Categoria} from './Categoria'
import {useSelector} from 'react-redux'

export const Category = () => {
  const {categories} =useSelector(state=>state.categories)
  return (
    <CategoryContainer>
      {
        categories.map(category=> 
        <Categoria key={category.id} {...category}/>
      )}
    </CategoryContainer>
  )
}
