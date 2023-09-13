//! JavaScript Object-Orianted Programming - Nesneye Dayalı Programlama

//! Önemli olduğunu düşündüğüm OOP kavramları;

// - extends   -->    Miras almak
// - super     -->    Üst sınıfların verilerine erişim
// - static     -->   Class üzerinden erişilebilen metodlar.
// - constructor   --> Yapıcı(Parametreleri geçirdiğimiz) Metodumuz.
// - Parametres    --> Dışardan gelen veri değerleri.
// - Yeni bir sınıf oluşturma  --> Miras alarak yeni sınıflar ve nesneler oluşturmak.
// - this kullanımı  --> Bu sınıf içinde tanımlanan verilerdir.

class Animal {  // Animal Sınıfı tanımladık "Ana" Sınıfımız budur.
    constructor(color = 'red', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {  // Animal Sınıfımız(Ana Sınıf) içindeki ilk Metodumuz. //! Enerji Kontrolü sağlayan bir metod tanımladık.
        if(this.energy > 0) {
            this.energy -= 20; //! Enerjiyi 20 düşürdü.
            console.log('Energy is decreasing, currently at:', this.energy) //Mevcut enerjiyi yazdırdı.
        } else if(this.energy == 0){ //! Eğer Enerji 0 ise,
            this.sleep();   //! uyuma metodunu çağırdık.
        }
    }
    sleep() { // Animal Sınıfımız(Ana Sınıf) içindeki ikinci metodumuz. //! Uyku Kontrolü sağlayan bir metod tanımladık.
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() { // Animal Sınıfımız(Ana Sınıf) içindeki üçüncü metodumuz. //! Renk getirmeyi sağlayan bir metod tanımladık.
        console.log(this.color)
    }
}

class Cat extends Animal {  //! Animal sınıfımızdan miras aldık ve Cat sınıfını oluşturduk.
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) { //!Bazı özellikler
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal { //! Animal sınıfımızdan miras aldık ve Bird sınıfını oluşturduk.
    constructor(sound = 'chirp', canFly = true, color, energy) { // Kuş sınıfına özel bazı parametreler tanımladık.
        super(color, energy); //! Super metodu ile bu değerleri ana sınıftan Animal'dan çektik.
        this.sound = sound; //Bu sınıfta belirlendi.
        this.canFly = canFly; //Bu sınıfta belirlendi.
    }
    makeSound() {  // ses veren başka bir metodumuz.
        console.log(this.sound);
    }
}

class HouseCat extends Cat { //! Cat sınıfından miras alarak bir HouseCat sınıfı oluşturduk.
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy); //! Bu parametreleri üst sınıfdan aldık.("Animal ve Cat üst Sınıfının özellikleridir.")
        this.houseCatSound = houseCatSound; // bu sınıfa özel yeni bir değer tanımlaması yaptık.
    }
    makeSound(option) {
        if (option) {
            super.makeSound(); //! Üst sınıflardan çektğimiz makeSound() metodu
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

var fiji = new Parrot(false); //! Bu sınıfa false değeri gönderdik ve fiji değişkenine atadık. Bu Parrot Sınıfına false gönderir ve ilgili kuşun konuşmadığını gösterir.
var polly = new Parrot(true); //! Bu sınıfa true değeri gönderdik ve fiji değişkenine atadık. Bu Parrot Sınıfına false gönderir ve ilgili kuşun konuşabildiği gösterir.

fiji.makeSound(); 
fiji.makeSound(true); //Fiji türündeki Papağanımızın ses çıkarmasını true olarak ayarladık.

polly.makeSound(); 
polly.makeSound(true); //Polly türündeki Papağanımızın ses çıkarmasını true olarak ayarladık.

polly.color; // yellow değeri gelecektir en başta Ana sınıfımızda belirtilen değerlerdir.
polly.energy; // 100  değeri gelecektir en başta Ana sınıfımızda belirtilen değerlerdir.

polly.isActive(); // Enerjiyi düşürüyoruz. ve aktif olarak 80 enerji kalıyor.

var penguin = new Bird("shriek", false, "black and white", 200); // Bütün özel değerleri gönderiyoruz.
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Enerjiyi düşürdük.(-20)

var leo = new HouseCat(); // HouseCat sınıfından yeni bir nesne türettik "leo"


leo.makeSound(false); // leo mıraldanmasın yani false yalnızca make sound yani ses çıkarsın "meow"

leo.makeSound(true); // leo mıraldansın yani true ve make sound yani ses çıkarsın "purr, meow"

//! Aynı şekilde dilediğimiz gibi nesne üreterek işlemlerimizi yapabiliriz.
var cuddles = new Tiger(); 
cuddles.makeSound(false); 
cuddles.makeSound(true); 







// Resources
//! Meta JavaScript Course and Documents.