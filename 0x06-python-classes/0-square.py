#!/usr/bin/python3
"""defines a class square"""
class Square:
    """
    Class representing a square
    """
    def __init__ (self, length):
        """
        Initializes a square with the given length
        """
        self.length = length
    def get_area (self):
        return self.length ** 2
    def get_perimeter(self):
        return 4 * self.length
        
