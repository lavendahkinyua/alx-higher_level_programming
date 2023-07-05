#!/usr/bin/python3
""" A class Square"""


class Square:
    """ defining class square"""
    def __init__(self, size=0)
    """initializing the square class"""
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        else:
            self.__size = size
    def __area__(self):
        return self.__size ** 2
