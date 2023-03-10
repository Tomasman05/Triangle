describe("Számítás az app.js-ben",()=>{
    it ("Ha bemenet 30,35 akkor 525 legyen az eredmény",()=>{
        let actual = calcArea(30,35)
        expect(525).toBe(actual)
    })
    it ("Ha bemenet 100,130 akkor 6500 legyen az eredmény",()=>{
        let actual = calcArea(100,130)
        expect(6500).toBe(actual)
    })
    it ("Ha bemenet 1,3 akkor 1,5 legyen az eredmény",()=>{
        let actual = calcArea(1,3)
        expect(1.5).toBe(actual)
    })
    it ("Ha bemenet 1,3 akkor 1,5 legyen az eredmény",()=>{
        let actual = calcArea(3,1)
        expect(1.5).toBe(actual)
    })
    
})

describe("adattípus teszt", ()=>{
    it("'a' bemenetre null-t várunk", ()=>{
        let check = checkInput("fa")
        expect(check).toBeNull()
    })
    it("Szám bemenetre nem null-t várunk", ()=>{
        let check = checkInput("30")
        expect(check).not.toBeNull()
    })
})
