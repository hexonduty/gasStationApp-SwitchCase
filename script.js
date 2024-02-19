const dizel = 24.12;
const benzin = 20.13;
const lpg = 9.12;

const yeniCizgi = "\r\n"

const secim =   
  "1-Dizel" +
  yeniCizgi +
  "2-Benzin" +
  yeniCizgi +
  "3-LPG" +
  yeniCizgi +
  "Yakıt türünü seçiniz";

let yakitTipi = Number(prompt(secim));
let yakitLitresi = Number(prompt("Yakıt litresini giriniz.."));
let bakiye = Number(prompt("Bakiyenizi giriniz"));

switch(yakitTipi){
    case 1:
    let odenecekTutar = dizel * yakitLitresi;
    if (odenecekTutar < bakiye){
        // İşlem başarılı
        bakiye = bakiye - odenecekTutar;
        alert(`İşlem başarılı bir şekilde gerçekleştirildi. ${yeniCizgi} Kalan Bakiye : ${bakiye} `)
    }
    else{
        // İşlem Başarısız
        alert(
            "Bakiyeniz yeterli değildir" +
              yeniCizgi +
              "Ödenecek Tutar : " +
              odenecekTutar +
              yeniCizgi +
              "Bakiye : " +
              bakiye +
              yeniCizgi +
              "Eksis Tutar : " +
              (odenecekTutar - bakiye)
          );
    }
    break;
    case 2:
    odenecekTutar = benzin * yakitLitresi;
    if (odenecekTutar < bakiye){
        // İşlem başarılı
        bakiye = bakiye - odenecekTutar;
        alert(`İşlem başarılı bir şekilde gerçekleştirildi. ${yeniCizgi} Kalan Bakiye : ${bakiye} `)
    }
    else{
        // İşlem Başarısız
        alert(
            "Bakiyeniz yeterli değildir" +
              yeniCizgi +
              "Ödenecek Tutar" +
              odenecekTutar +
              yeniCizgi +
              "Bakiye : " +
              bakiye +
              yeniCizgi +
              "Eksis Tutar : " +
              (odenecekTutar - bakiye)
          );
    }
    break;
    case 3:
        odenecekTutar = lpg * yakitLitresi;
        if (odenecekTutar < bakiye){
            // İşlem başarılı
            bakiye = bakiye - odenecekTutar;
            alert(`İşlem başarılı bir şekilde gerçekleştirildi. ${yeniCizgi} Kalan Bakiye : ${bakiye} `)
        }
        else{
            // İşlem Başarısız
            alert(
                "Bakiyeniz yeterli değildir" +
                  yeniCizgi +
                  "Ödenecek Tutar" +
                  odenecekTutar +
                  yeniCizgi +
                  "Bakiye : " +
                  bakiye +
                  yeniCizgi +
                  "Eksis Tutar : " +
                  (odenecekTutar - bakiye)
              );
        }
        break;
}
