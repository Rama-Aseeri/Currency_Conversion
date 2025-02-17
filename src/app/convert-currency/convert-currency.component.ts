import { Component } from '@angular/core';

@Component({
  selector: 'app-convert-currency',
  standalone: false,
  templateUrl: './convert-currency.component.html',
  styleUrl: './convert-currency.component.css'
})
export class ConvertCurrencyComponent {

currancy = [
    {'id': 1, 'country_name': 'ألبانيا', 'Currency_code': 'ALL'},
    {'id': 2, 'country_name': 'أفغانستان', 'Currency_code': 'AFN'},
    {'id': 3, 'country_name': 'الأرجنتين', 'Currency_code': 'ARS'},
    {'id': 4, 'country_name': 'أروبا', 'Currency_code': 'AWG'},
    {'id': 5, 'country_name': 'أستراليا', 'Currency_code': 'AUD'},
    {'id': 6, 'country_name': 'أذربيجان', 'Currency_code': 'AZN'},
    {'id': 7, 'country_name': 'الباهاما', 'Currency_code': 'BSD'},
    {'id': 8, 'country_name': 'بربادوس', 'Currency_code': 'BBD'},
    {'id': 9, 'country_name': 'بيلاروسيا', 'Currency_code': 'BYN'},
    {'id': 10, 'country_name': 'بليز', 'Currency_code': 'BZD'},
    {'id': 11, 'country_name': 'برمودا', 'Currency_code': 'BMD'},
    {'id': 12, 'country_name': 'بوليفيا', 'Currency_code': 'BOB'},
    {'id': 13, 'country_name': 'بلغاريا', 'Currency_code': 'BGN'},
    {'id': 14, 'country_name': 'البرازيل', 'Currency_code': 'BRL'},
    {'id': 15, 'country_name': 'كمبوديا', 'Currency_code': 'KHR'},
    {'id': 16, 'country_name': 'كندا', 'Currency_code': 'CAD'},
    {'id': 17, 'country_name': 'جزر كايمان', 'Currency_code': 'KYD'},
    {'id': 18, 'country_name': 'تشيلي', 'Currency_code': 'CLP'},
    {'id': 19, 'country_name': 'مصر', 'Currency_code': 'EGP'},
    {'id': 20, 'country_name': 'آيسلندا', 'Currency_code': 'ISK'},
    {'id': 21, 'country_name': 'الهند', 'Currency_code': 'INR'},
    {'id': 22, 'country_name': 'إندونيسيا', 'Currency_code': 'IDR'},
    {'id': 23, 'country_name': 'اليابان', 'Currency_code': 'JPY'},
    {'id': 24, 'country_name': 'كوريا الجنوبية', 'Currency_code': 'KRW'},
    {'id': 25, 'country_name': 'كوريا الشمالية', 'Currency_code': 'KPW'},
    {'id': 26, 'country_name': 'لبنان', 'Currency_code': 'LBP'},
    {'id': 27, 'country_name': 'ماليزيا', 'Currency_code': 'MYR'},
    {'id': 28, 'country_name': 'عمان', 'Currency_code': 'OMR'},
    {'id': 29, 'country_name': 'باكستان', 'Currency_code': 'PKR'},
    {'id': 30, 'country_name': 'قطر', 'Currency_code': 'QAR'},
    {'id': 31, 'country_name': 'روسيا', 'Currency_code': 'RUB'},
    {'id': 32, 'country_name': 'المملكة العربية السعودية', 'Currency_code': 'SAR'},
    {'id': 33, 'country_name': 'السويد', 'Currency_code': 'SEK'},
    {'id': 34, 'country_name': 'سويسرا', 'Currency_code': 'CHF'},
    {'id': 35, 'country_name': 'سورينام', 'Currency_code': 'SRD'},
    {'id': 36, 'country_name': 'سوريا', 'Currency_code': 'SYP'},
    {'id': 37, 'country_name': 'تركيا', 'Currency_code': 'TRY'},
    {'id': 38, 'country_name': 'الولايات المتحدة', 'Currency_code': 'USD'},
    {'id': 39, 'country_name': 'أوروغواي', 'Currency_code': 'UYU'},
    {'id': 40, 'country_name': 'أوزبكستان', 'Currency_code': 'UZS'},
    {'id': 41, 'country_name': 'اليمن', 'Currency_code': 'YER'},
    {'id': 42, 'country_name': 'زيمبابوي', 'Currency_code': 'ZWD'},
    {'id': 43, 'country_name': 'البوسنة والهرسك', 'Currency_code': 'BAM'},
    {'id': 44, 'country_name': 'كرواتيا', 'Currency_code': 'HRK'},
    {'id': 45, 'country_name': 'أيرلندا', 'Currency_code': 'EUR'},
    {'id': 46, 'country_name': 'جمهورية التشيك', 'Currency_code': 'CZK'},
    {'id': 47, 'country_name': 'المجر', 'Currency_code': 'HUF'},
    {'id': 48, 'country_name': 'نيوزيلندا', 'Currency_code': 'NZD'},
    {'id': 49, 'country_name': 'فيتنام', 'Currency_code': 'VND'},
    {'id': 50, 'country_name': 'ملاوي', 'Currency_code': 'MWK'},
    {'id': 51, 'country_name': 'سيراليون', 'Currency_code': 'SLL'},
    {'id': 52, 'country_name': 'نيجيريا', 'Currency_code': 'NGN'},
    {'id': 53, 'country_name': 'جنوب إفريقيا', 'Currency_code': 'ZAR'},
    {'id': 54, 'country_name': 'غانا', 'Currency_code': 'GHS'},
    {'id': 55, 'country_name': 'جمهورية الكونغو', 'Currency_code': 'CDF'},
    {'id': 56, 'country_name': 'موزمبيق', 'Currency_code': 'MZN'},
    {'id': 57, 'country_name': 'كازاخستان', 'Currency_code': 'KZT'},
    {'id': 58, 'country_name': 'أرمينيا', 'Currency_code': 'AMD'},
    {'id': 59, 'country_name': 'نيبال', 'Currency_code': 'NPR'},
    {'id': 60, 'country_name': 'غواتيمالا', 'Currency_code': 'GTQ'},


{'id': 61, 'country_name': 'باراغواي', 'Currency_code': 'PYG'},
    {'id': 62, 'country_name': 'بنغلاديش', 'Currency_code': 'BDT'},
    {'id': 63, 'country_name': 'مدغشقر', 'Currency_code': 'MGA'},
    {'id': 64, 'country_name': 'سريلانكا', 'Currency_code': 'LKR'},
    {'id': 65, 'country_name': 'أفريقيا الوسطى', 'Currency_code': 'XAF'},
    {'id': 66, 'country_name': 'توجو', 'Currency_code': 'XOF'},
    {'id': 67, 'country_name': 'جزر المالديف', 'Currency_code': 'MVR'},
    {'id': 68, 'country_name': 'تيمور الشرقية', 'Currency_code': 'USD'},
    {'id': 69, 'country_name': 'سوازيلاند', 'Currency_code': 'SZL'},
    {'id': 70, 'country_name': 'ملاوي', 'Currency_code': 'MWK'},
    {'id': 71, 'country_name': 'جزر كوك', 'Currency_code': 'NZD'},
    {'id': 72, 'country_name': 'توفالو', 'Currency_code': 'AUD'},
    {'id': 73, 'country_name': 'نيوي', 'Currency_code': 'NZD'},
    {'id': 74, 'country_name': 'غينيا', 'Currency_code': 'GNF'},
    {'id': 75, 'country_name': 'فلسطين', 'Currency_code': 'ILS'},
    {'id': 76, 'country_name': 'ماكاو', 'Currency_code': 'MOP'},
    {'id': 77, 'country_name': 'كومنولث الدومينيكان', 'Currency_code': 'DOP'},
    {'id': 78, 'country_name': 'جزر فيرجن البريطانية', 'Currency_code': 'USD'},
    {'id': 79, 'country_name': 'جزر فيرجن الأمريكية', 'Currency_code': 'USD'},
    {'id': 80, 'country_name': 'سانت لوسيا', 'Currency_code': 'XCD'},
]



data: any;
fromConvert: string = "";
toConvert: string = "";
amount: number = 100;  // Default amount set to 100
result: any;  // To store the result of the conversion

get_currency() {
  const accessKey = 'c1aa7afe9626087ab120319b705f0201';  // Your API key as a string

  // Construct the API URL
  const url = `https://api.currencylayer.com/convert?from=${this.fromConvert}&to=${this.toConvert}&amount=${this.amount}&access_key=${accessKey}`;

  // Fetch data from the API
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();  // Parse the JSON response
    })
    .then(result => {
      this.data = result;  // Store the result in the 'data' property

      // Assuming the result contains the converted value (e.g., result.result)
      this.result = result.result ;  // Set result to the appropriate data from the API
    })
    .catch(error => {
      console.error('Fetch error:', error);  // Handle any errors during fetch
    });
}
}