<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $namaPegawai = 'Ahmad Sopandi';
        $agama = 'Islam';
        $jabatan = 'Manager';
        $status = 'Menikah';
        $jmlAnak = 4;
        switch ($jabatan) {
            case 'Asisten':
                $gapok = 15000000;
                break;
            case 'Kabag':
                $gapok =  10000000;
                break;
            case 'Manager':
                $gapok =  20000000;
                break;
            case 'Staff':
                $gapok =  4000000;
                break;
            
            default:
                $gapok =  0;
                break;
        }
        $tunjangan_jabatan = $gapok * (20/100);

        if ($status == 'Menikah' and $jmlAnak <= 2) {
            $tunjangan_keluarga = $gapok*(5/100);
        }
        elseif ($status == 'Menikah' and $jmlAnak >= 3 and $jmlAnak <= 5) {
            $tunjangan_keluarga = $gapok*(10/100);
        }
        else{
            $tunjangan_keluarga = 0 ;
        }
        $gaji_kotor = $gapok + $tunjangan_jabatan + $tunjangan_keluarga;
        $zakat = ($agama == 'Islam' and $gaji_kotor >= 6000000) ? (2.5/100) : 0; 
        $thy = ($zakat == 0) ? $gaji_kotor : $gaji_kotor-($gaji_kotor*$zakat);


        echo " Nama Pegawai : $namaPegawai <br>
               Agama : $agama <br>  
               Jabatan : $jabatan <br>
               Status : $status <br>
               Jumlah Anak : $jmlAnak <br>
               Gaji Pokok : $gapok <br>
               Tunjangan Jabatan : $tunjangan_jabatan <br>
               Tunjangan Keluarga : $tunjangan_keluarga <br>
               Gaji Kotor : $gaji_kotor <br>
               Zakat : $zakat <br>
               Take Home Pay :$thy ";
               
    ?>

</body>
</html>