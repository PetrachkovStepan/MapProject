import nature from "@tags/nature.svg"
import architecture from "@tags/architecture.svg"
import bank from "@tags/bank.svg"
import bike from "@tags/bike.svg"
import coffee from "@tags/coffee.svg"
import culture from "@tags/culture.svg"
import entartaiment from "@tags/entertaiments.svg"
import faith from "@tags/faith.svg"
import food from "@tags/food.svg"
import gasStation from "@tags/gas station.svg"
import history from "@tags/history.svg"
import industry from "@tags/industry.svg"
import other from "@tags/other.svg"
import shoping from "@tags/shoping.svg"
import sports from "@tags/sports.svg"
import tourist_car from "@tags/tourist_car.svg"
import adults from "@tags/18+.svg"
import bed from "@tags/bed.svg"

import alt_nature from "@assets/AltTagImages/altNature.svg"
import alt_architecture from "@assets/AltTagImages/altArchitecture.svg"
import alt_bank from "@assets/AltTagImages/altBank.svg"
import alt_bike from "@assets/AltTagImages/altBike.svg"
import alt_coffee from "@assets/AltTagImages/altCoffee.svg"
import alt_culture from "@assets/AltTagImages/altCulture.svg"
import alt_entartaiment from "@assets/AltTagImages/altEntertaiments.svg"
import alt_faith from "@assets/AltTagImages/altFaith.svg"
import alt_food from "@assets/AltTagImages/altFood.svg"
import alt_gasStation from "@assets/AltTagImages/alt_GasStation.svg"
import alt_history from "@assets/AltTagImages/altHistory.svg"
import alt_industry from "@assets/AltTagImages/altIndustry.svg"
import alt_other from "@assets/AltTagImages/altOther.svg"
import alt_shoping from "@assets/AltTagImages/altShoping.svg"
import alt_sports from "@assets/AltTagImages/altSports.svg"
import alt_tourist_car from "@assets/AltTagImages/altTouristCar.svg"
import alt_adults from "@assets/AltTagImages/alt18+.svg"
import alt_bed from "@assets/AltTagImages/altBed.svg"

export interface TagListInter{
    item: {
        id: number, 
        onSearch: boolean, 
        name: string, 
        image: string, 
        altImage:string,
        tag: string
    }
}

export const tagList = [
    {id: 1, onSearch: true, name: "Природа", image: nature, altImage: alt_nature, tag: "natural"},
    {id: 2, onSearch: true, name: "Архитектура", image: architecture, altImage: alt_architecture, tag: "architecture"},
    {id: 3, onSearch: true, name: "Банки", image: bank, altImage: alt_bank, tag: "banks"},
    {id: 4, onSearch: true, name: "Велосипеды", image: bike, altImage: alt_bike, tag: "bicycle_rental"},
    {id: 5, onSearch: true, name: "Кофе/чай", image: coffee, altImage: alt_coffee, tag: "foods"},
    {id: 6, onSearch: true, name: "Культура", image: culture, altImage: alt_culture, tag: "cultural"},
    {id: 7, onSearch: true, name: "Развлечения", image: entartaiment, altImage: alt_entartaiment, tag: "amusements"},
    {id: 8, onSearch: true, name: "Религия", image: faith, altImage: alt_faith, tag: "religion"},
    {id: 9, onSearch: true, name: "Еда", image: food, altImage: alt_food, tag: "foods"},
    {id: 10, onSearch: true, name: "Заправки", image: gasStation, altImage: alt_gasStation, tag: "fuel"},
    {id: 11, onSearch: true, name: "История", image: history, altImage: alt_history, tag: "historic"},
    {id: 12, onSearch: true, name: "Индустриальные объекты", image: industry, altImage: alt_industry, tag: "industrial_facilities"},
    {id: 13, onSearch: true, name: "Магазины", image: shoping, altImage: alt_shoping, tag: "shops"},
    {id: 14, onSearch: true, name: "Спорт", image: sports, altImage: alt_sports, tag: "sport"},
    {id: 15, onSearch: true, name: "Авто", image: tourist_car, altImage: alt_tourist_car, tag: "car_sharing"},
    {id: 16, onSearch: true, name: "Место для сна", image: bed, altImage: alt_bed, tag: "accomodations"},
    {id: 17, onSearch: true, name: "18+", image: adults, altImage: alt_adults, tag: "adult"},
    {id: 18, onSearch: true, name: "Разное", image: other, altImage: alt_other, tag: "other"},
]