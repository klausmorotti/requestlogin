import { useReducer } from "react";

import { typeActionReducer } from "../types/typeActionReducer";

// REDUCER
type companie = {
    cnpj: string;
    razao_social: string;
    email: string;
    id_categoria: string;
    end_uf: string;
    data_edicao: string;
  }

  const initialValue: companie[] = []

  const reducer = (state: companie[], action: typeActionReducer) => {
    switch (action.type) {
      case 'ADD_COMPANIE':

      break;
      case 'ALPHABETICAL_ORDER':

        break;
      case 'COMPANIE_ORDER':

        break;
      case 'REGISTRATION_DATE_ORDER':

        break;
      case 'UF_ORDER':

        break;
    };

    return state;
}

export const reducerFilters = () => {
    return useReducer(reducer, initialValue);
}
