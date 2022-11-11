# praktika 

## MyForm 

1. klaseje igyvendinti metoda getCategoriesFetch
```javascript
getCategoriesFetch() {
    // gauti kategorijas is https://dummyjson.com/products/categories
    // irasyti i this.categoriesArrFetch
  }
```

2.  pasirinkimai selectui makeAndAddCategoriesOptions()
```javascript
makeAndAddCategoriesOptions() {
    // panaudoti kategoriju masyva this.categoriesArrFetch pagalminti pasirinkimus selectui
    // sugeneruoti pasirinkimus kategoriju selektui.
  }
```

3. pridejus nauja produkta ir gavus sekminga atsakyma paslepti pridejimo forma. (display none arba su klase.)

4. htmle yra selektas, sugeneruoti jame kategorijas
```html
<select id="filter-category">
  <option selected disabled>Rodyti tik</option>
</select>
```
sugeneruoti jame kategorijas is https://dummyjson.com/products/categories


4.1. padaryti kad pasirinkus kategorija parsiustume ir rodytume tik tos kategorijos produktus.(tam reiktu nebenaudoti db.json o siustis is https://dummyjson.com/products/category/smartphones kur smartphones yra kategorija)