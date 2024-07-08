import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id:1,name: "Dashboard", href: "/dashboard", current: false },
  { id:2,name: "Your Blogs", href: "#", current: false },
  { id:3,name: "Analytics", href: "#", current: false },
  { id:4,name: "Help", href: "#", current: false },
  {
    id:5,name: "Return to Website",
    href: "/",
    current: true,
  },
];

export const DashNavbarSlice = createSlice({
  name: "DashNav",
  initialState,
  reducers: {
    setActiveDashNavItem: (state, action) => {
      const Index = initialState.findIndex((item) => {
        return item.name === action.payload.name;
      });
      if (Index == -1) {
        return initialState;
      }

      const RestAvailable = initialState.filter((item) => {
        return item.id != Index + 1;
      });


      const updatedResult = [
        ...RestAvailable,
        {
          id: initialState[Index].id,
          name: action.payload.name,
          href: initialState[Index].href,
          current: true,
        },
      ];
      return updatedResult.sort((a, b) => a.id - b.id);
    },
  },
});

export const { setActiveDashNavItem } = DashNavbarSlice.actions;
export default DashNavbarSlice.reducer;
