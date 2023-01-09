import { filterBrand } from "../Filter-brand/Filter-brand";
import { filterCategory } from "../Filter-category/Filter-category";
import { IProducts } from "../../../../utils/interface";
import { createArr } from "../../../../utils/main/searchSortProduct";
import { createCardProduct } from "../../Products/Product-card/Product-card";
import { filterPrice } from "../Filter-price/Filter-price";
import { filterStock } from "../Filter-stock/Filter-stock";
import { buttonsClearCopy } from "../Buttons-Clear-Copy/Buttons-Clear-Copy";
import {
  saveLocal,
  saveLocalMin,
  saveLocalMax,
  printLocalMin,
  printLocalMax,
} from "../../../../utils/saveLocal";

export const createWrapperFilters = () => {
  const divWrapperFilters: HTMLDivElement = document.createElement("div");
  divWrapperFilters.classList.add("wrapper-filters");
  const divFilters: HTMLDivElement = document.createElement("div");
  divFilters.classList.add("wrapper-block__filters");

  const btnsBlock = buttonsClearCopy();
  const filterBrandBlock = filterBrand();
  const filterCategoryBlock = filterCategory();
  const filterPriceBlock = filterPrice();
  const filterStockBlock = filterStock();

  divFilters.append(filterBrandBlock,filterCategoryBlock,filterPriceBlock,filterStockBlock)
  divWrapperFilters.append(
    btnsBlock.divButtons,
    divFilters
  );


  divWrapperFilters.addEventListener("input", () => {
    // console.log("filter");

    const data: IProducts[] = createArr();

    const allProd = document.querySelector(".products-cards") as HTMLDivElement;

    const allInputBrand: NodeListOf<Element> = document.querySelectorAll(
      ".brand__input:checked"
    );
    const arrCheckedBrand: string[] = [...allInputBrand].map((item) =>
      (<HTMLInputElement>item).value.toLowerCase()
    );

    const allInputCategory: NodeListOf<Element> = document.querySelectorAll(
      ".category__input:checked"
    );
    const arrCheckedCategory: string[] = [...allInputCategory].map((item) =>
      (<HTMLInputElement>item).value.toLowerCase()
    );

    let min = printLocalMin('min');
    let max = printLocalMax('max');
    let minStock = printLocalMin('minStock');
    let maxStock = printLocalMax('maxStock');

    const result = [...arrCheckedBrand, ...arrCheckedCategory];

    let arrBrandFilter: IProducts[] = []


      if(arrCheckedBrand.length > 0) {
        arrBrandFilter = data.filter(prod => {
          if(arrCheckedBrand.includes(prod.brand.toLowerCase())) {
            return prod;
          }
        })
      }
      if(arrCheckedCategory.length > 0) {
        arrBrandFilter = data.filter(prod => {
          if(arrCheckedCategory.includes(prod.category.toLowerCase())) {
            return prod;
          }
        })
      }

      if(min !== null || max !== null) {
        arrBrandFilter = data.filter(prod => {
          if((prod.price >= Number(min) && prod.price <= Number(max))) {
            return prod;
          }
              setTimeout(() => {
                localStorage.removeItem('min')
                localStorage.removeItem('max')
                },100)
        })
      } 
      
      if(minStock !== null || maxStock !== null) {
        arrBrandFilter = data.filter(prod => {
          if((prod.stock >= Number(minStock) && prod.stock <= Number(maxStock))) {
            return prod;
          }
              setTimeout(() => {
                localStorage.removeItem('minStock')
                localStorage.removeItem('maxStock')
                },100)
        })
      }   

    if(arrCheckedBrand.length > 0 && arrCheckedCategory.length > 0) {
      arrBrandFilter = data.filter(prod => {
        if(arrCheckedCategory.includes(prod.category.toLowerCase()) && arrCheckedBrand.includes(prod.brand.toLowerCase())) {
          return prod;
        }
      })
    }
  
    // console.log("arrBrandFilter", arrBrandFilter);
    let spanCouterProducts = document.querySelector(".span-couter-products");
    spanCouterProducts!.textContent = `Products: ${arrBrandFilter.length}`;

    allProd.textContent = "";
    arrBrandFilter.forEach((prod) => {
      allProd.append(createCardProduct(prod));
    });
    if(arrBrandFilter.length === 0 && result.length === 0) {
      data.forEach((prod) => {
        allProd.append(createCardProduct(prod));
      });
      spanCouterProducts!.textContent = `Products: ${data.length}`;
    } else if(arrBrandFilter.length === 0) {
      allProd.textContent = "Товар не найден";
    }

    

    
    // фильтр по цене
    const rangeInput: NodeListOf<Element> =
      document.querySelectorAll(".range-input input");
    const priceInput: NodeListOf<Element> =
      document.querySelectorAll(".price-input input");
    const range = document.querySelector(".slider .progress");
    let priceGap: number = 0;

    rangeInput.forEach((input) => {
      input.addEventListener("input", (e: Event) => {
        let minVal: number = parseInt((<HTMLInputElement>rangeInput[0]).value);
        let maxVal: number = parseInt((<HTMLInputElement>rangeInput[1]).value);

        saveLocalMin(String(minVal),'min');
        saveLocalMax(String(maxVal),'max');

        if (maxVal - minVal < priceGap) {
          if ((e.target as HTMLInputElement).className === "range-min") {
            (<HTMLInputElement>rangeInput[0]).value = String(maxVal - priceGap);
          } else {
            (<HTMLInputElement>rangeInput[1]).value = String(minVal + priceGap);
          }
        } else {
          (<HTMLInputElement>priceInput[0]).value = String(minVal);
          (<HTMLInputElement>priceInput[1]).value = String(maxVal);
          (range as HTMLInputElement).style.left =
            (minVal / Number((<HTMLInputElement>rangeInput[0]).max)) * 100 +
            "%";
          (range as HTMLInputElement).style.right =
            100 -
            (maxVal / Number((<HTMLInputElement>rangeInput[1]).max)) * 100 +
            "%";
        }
      });
    });

     // фильтр по stock
     const rangeInputStock: NodeListOf<Element> =
     document.querySelectorAll(".range-input-stock input");
   const priceInputStock: NodeListOf<Element> =
     document.querySelectorAll(".stock-input input");
   const rangeStock = document.querySelector(".slider-stock .progress-stock");
   let priceGapStock: number = 0;

   rangeInputStock.forEach((input) => {
     input.addEventListener("input", (e: Event) => {
       let minVal: number = parseInt((<HTMLInputElement>rangeInputStock[0]).value);
       let maxVal: number = parseInt((<HTMLInputElement>rangeInputStock[1]).value);

       saveLocalMin(String(minVal),'minStock');
       saveLocalMax(String(maxVal),'maxStock');

       if (maxVal - minVal < priceGapStock) {
         if ((e.target as HTMLInputElement).className === "range-min-stock") {
           (<HTMLInputElement>rangeInputStock[0]).value = String(maxVal - priceGapStock);
         } else {
           (<HTMLInputElement>rangeInputStock[1]).value = String(minVal + priceGapStock);
         }
       } else {
         (<HTMLInputElement>priceInputStock[0]).value = String(minVal);
         (<HTMLInputElement>priceInputStock[1]).value = String(maxVal);
         (rangeStock as HTMLInputElement).style.left =
           (minVal / Number((<HTMLInputElement>rangeInputStock[0]).max)) * 100 +
           "%";
         (rangeStock as HTMLInputElement).style.right =
           100 -
           (maxVal / Number((<HTMLInputElement>rangeInputStock[1]).max)) * 100 +
           "%";
       }
     });
   });



    saveLocal(arrBrandFilter);
  });

  btnsBlock.btnClear.addEventListener('click', () => {
    const blockFilters = document.querySelector('.wrapper-block__filters') as HTMLDivElement;
    
    const allProd = document.querySelector(".products-cards") as HTMLDivElement;
    const allInputBrand: NodeListOf<Element> = document.querySelectorAll(
      ".brand__input"
    );
    const allInputCategory: NodeListOf<Element> = document.querySelectorAll(
      ".category__input"
    );

    const filterBrandBlock = filterBrand();
    const filterCategoryBlock = filterCategory();
    const filterPriceBlock = filterPrice();
    const filterStockBlock = filterStock();
    blockFilters.innerHTML = '';
    blockFilters.append(filterBrandBlock,filterCategoryBlock,filterPriceBlock,filterStockBlock)
  

    allInputBrand.forEach(item  => {
      if((<HTMLInputElement>item).checked) {
        (<HTMLInputElement>item).checked = false;
      }
    });
    allInputCategory.forEach(item  => {
      if((<HTMLInputElement>item).checked) {
        (<HTMLInputElement>item).checked = false;
      }
    });
    const data: IProducts[] = createArr();
    allProd.textContent = '';
    data.forEach((prod) => {
      allProd.append(createCardProduct(prod));
    });
    

  })

  return divWrapperFilters;
};
