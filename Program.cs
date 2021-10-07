using System;

namespace testeC_
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite o peso da peça:");
            int peso = int.Parse(Console.ReadLine());
            if (peso > 100)
            {
                Console.WriteLine("A peça possui o peso adequado para o cadastramento");
            }else{
                Console.WriteLine("O peso da peça é imcompativel para o cadastramento");
            }
            
            string[] listaPecas = new string[3];
            Console.WriteLine("Digite o nome das peças");
            string[] s = Console.ReadLine().Split(' ');
            for (int i = 0; i < 3; i++){
                listaPecas[i] = (s[i]);
            }
            Console.WriteLine("O nome das peças que vc cadastrou foi:");
            for (int i = 0; i < 3; i++){
                Console.WriteLine(s[i]);
            }
            
        }
    }
}
