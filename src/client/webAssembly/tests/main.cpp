#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std; 

typedef unsigned int bitBlocks;


int blockSize()
{
    return sizeof(bitBlocks) * 8; 
}

bitBlocks blip()
{

    return 98; 
/*    srand(time(0)); 
    return rand() % blockSize() + 1; */

}


int main(){
    cout << blip() << endl; 
}
