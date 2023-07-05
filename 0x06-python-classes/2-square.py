#!/usr/bin/python3
class square:
    def __innit__(self, _size=0):
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        else:
            self._size = size
