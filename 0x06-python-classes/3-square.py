#!/usr/bin/python3
""" A class Square"""


class Square:
""" Initializing the class"""
    def __init__(self, size=0)
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        else:
            self.__size = size
    def __area__(self):
        return self.__size ** 2
