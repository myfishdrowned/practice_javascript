# def add7(number):
#     return number + 7
# number = int(input('what\'s your number? '))
# print(add7(number))

# def greeting(name):
#     return f'hello, {name}'
# name = input('What\'s your name? ')
# print(greeting(name))



def what_cars():
    result = ''
    for i in cars:
        result += i + '\n'
    return result
cars = ['toyota', 'honda', 'lexus', 'nissan', 'infiniti', 'mazda']
print(what_cars())
