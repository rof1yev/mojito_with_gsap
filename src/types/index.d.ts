export type NAVBAR_ITEM_TYPE = {
  id: string;
  label: string;
};

export type COCKTAIL_LISTS_ITEM_TYPE = {
  name: string;
  country: string;
  detail: string;
  price: string;
};

export type MOCK_TAIL_LISTS_ITEM_TYPE = {
  name: string;
  country: string;
  detail: string;
  price: string;
};

export type STORE_INFO_TYPE = {
  heading: string;
  address: string;
  contact: {
    phone: string;
    email: string;
  };
};

export type OPENING_HOURS_TYPE = {
  day: string;
  time: string;
};

export type SOCIALS_TYPE = {
  name: string;
  icon: string;
  url: string;
};

export type ALL_COCKTAILS_ITEM_TYPE = {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
};
