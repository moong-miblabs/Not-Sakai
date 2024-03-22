import _ from 'lodash'
import dateFormat, { i18n } from 'dateFormat'

i18n.dayNames = [
  "Min",
  "Sen",
  "Sel",
  "Rab",
  "Kam",
  "Jum",
  "Sab",
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jum'at",
  "Sabtu",
];

i18n.monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

i18n.timeNames = ["a", "p", "am", "pm", "A", "P", "AM", "PM"];

export function datepickerFormat(date){
  if(_.isNull(date)) return null
  if(_.isDate(date)) return dateFormat(date,"d mmmm yyyy")
  else return dateFormat(Date.parse(date),"d mmmm yyyy")
}

export function sqlDate(date){
  if(_.isNull(date)) return null
  if(_.isDate(date)) return dateFormat(date,"yyyy-mm-dd")
  else return dateFormat(Date.parse(date),"yyyy-mm-dd")
}

export function sqlTime(date){
  if(_.isNull(date)) return null
  if(_.isDate(date)) return dateFormat(date,"HH:MM:ss")
  else return dateFormat(Date.parse(date),"HH:MM:ss")
}

export function sqlDateTime(date){
  if(_.isNull(date)) return null
  if(_.isDate(date)) return dateFormat(date,"yyyy-mm-dd HH:MM:ss")
  else return dateFormat(Date.parse(date),"yyyy-mm-dd HH:MM:ss")
}

export function humanDate(date){
  if(_.isNull(date)) return null
	if(_.isDate(date)) return dateFormat(date,"dddd, d mmm yyyy")
  else return dateFormat(Date.parse(date),"dddd, d mmm yyyy")
}

export function humanDateTime(date){
  if(_.isNull(date)) return null
	if(_.isDate(date)) return dateFormat(date,"dddd, d mmm yyyy HH:MM")
  else return dateFormat(Date.parse(date),"dddd, d mmm yyyy HH:MM")
}
