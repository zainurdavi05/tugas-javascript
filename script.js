// 1. Variabel input nilai utama
let nilai = 80;
let grade, status, predikat;

// 2. Rumus logika percabangan untuk menentukan hasil otomatis
if (nilai >= 85) {
    grade = "A";
    status = "Lulus";
    predikat = "Sangat Memuaskan";
} else if (nilai >= 75) {
    grade = "B";
    status = "Lulus";
    predikat = "Memuaskan";
} else if (nilai >= 60) {
    grade = "C";
    status = "Lulus";
    predikat = "Cukup";
} else {
    grade = "E";
    status = "Tidak Lulus";
    predikat = "Kurang";
}

// 3. Mencetak hasil ke Console sesuai format gambar tugas
console.log("Nilai anda :" + nilai);
console.log("Grade :" + grade);
console.log("Status :" + status);
console.log("Predikat :" + predikat);

