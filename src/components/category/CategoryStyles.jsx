import styled from "styled-components"
import { motion } from "framer-motion"

export const CategoryContainer= styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    margin: 10px;
`

export const EachCategoryContainer=styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const IMGCategory= styled(motion.img)`
    width: 14rem;
    height: 6rem;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 3px 3px 0px 0px #232625;
    :active{
    box-shadow: 0px 0px 0px 0px #232625;
}
`

export const TextStyled=styled.h3`
  position: absolute;
  text-align: end;
  color: white;
  z-index: 10000;
`
