// Задача: Определить, является ли введенное пользователем число четным или нечетным.

// Алгоритм
// 1. Получить число.
// 2. Разделить число на 2 и проверить остаток от деления.
// 3. Если остаток равен 0, вывести "четное".
// 4. Иначе, вывести "нечетное".

// Решение

let n = -8;
 
   if (n % 2 === 0) {
       console.log(" четное");
   } else {
       console.log(" нечетное");
   }

   // const_string = "hello";
   // let reversed = "";
   // for (let i = string.length -1;i>=0; i--){
   //    reversed +=string[i]
   // }
   console.log(reversed)

   const string = "hello";
   let reversed = "";
   for (let i = string.length -1;i>=0; i--){
      reversed +=string[i]
   }
   if(string===reversed){
      console.log()
   }
