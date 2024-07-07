import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Home",
    link: "/",
    active: false,
  },
  {
    id: 2,
    name: "About",
    link: "/about",
    active: false,
  },
  {
    id: 3,
    name: "Service",
    link: "/service",
    active: false,
  },
  {
    id: 4,
    name: "Discover",
    link: "/discover",
    active: false,
  }
];

export const NavbarSlice = createSlice({
  name: "Navbar",
  initialState,
  reducers: {
    setActiveNavItem: (state, action) => {
      const Index = initialState.findIndex((item) => {
        return item.name === action.payload.name;
      });
      if (Index == -1) {
        return initialState;
      }
      console.log()

      const RestAvailable = initialState.filter((item)=>{

            return item.id != Index+1
        
      })


      const updatedResult = [
        ...RestAvailable,
        {
          id: initialState[Index].id,
          name: action.payload.name,
          link: initialState[Index].link,
          active: true,
        },
      ];
      return updatedResult.sort((a, b) => a.id - b.id);
    },
  },
});


export const { setActiveNavItem } = NavbarSlice.actions;
export default NavbarSlice.reducer;
