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

export interface TagListInter{
    item: {
        id: number, 
        onSearch: boolean, 
        name: string, 
        image: string, 
        tag: string
    }
}

export const tagList = [
    {id: 1, onSearch: true, name: "Природа", image: nature, tag: "natural"},
    {id: 2, onSearch: true, name: "Архитектура", image: architecture, tag: "architecture"},
    {id: 3, onSearch: true, name: "Банки", image: bank, tag: "banks"},
    {id: 4, onSearch: true, name: "Велосипеды", image: bike, tag: "bicycle_rental"},
    {id: 5, onSearch: true, name: "Кофе/чай", image: coffee, tag: "foods"},
    {id: 6, onSearch: true, name: "Культура", image: culture, tag: "cultural"},
    {id: 7, onSearch: true, name: "Развлечения", image: entartaiment, tag: "amusements"},
    {id: 8, onSearch: true, name: "Религия", image: faith, tag: "religion"},
    {id: 9, onSearch: true, name: "Еда", image: food, tag: "foods"},
    {id: 10, onSearch: true, name: "Заправки", image: gasStation, tag: "fuel"},
    {id: 11, onSearch: true, name: "История", image: history, tag: "historic"},
    {id: 12, onSearch: true, name: "Индустриальные объекты", image: industry, tag: "industrial_facilities"},
    {id: 13, onSearch: true, name: "Магазины", image: shoping, tag: "shops"},
    {id: 14, onSearch: true, name: "Спорт", image: sports, tag: "sport"},
    {id: 15, onSearch: true, name: "Авто", image: tourist_car, tag: "car_sharing"},
    {id: 16, onSearch: true, name: "Место для сна", image: bed, tag: "accomodations"},
    {id: 17, onSearch: true, name: "18+", image: adults, tag: "adult"},
    {id: 18, onSearch: true, name: "Разное", image: other, tag: "other"},
]