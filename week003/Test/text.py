
# input = int(input())
# arr = list(map(int,input().split()))
# dict1 ={}
# for i in arr:
#     if i in dict1:
#         dict1[i]+=1
#     else:
#         dict1[i]=1

# sum = 0        
# for i,j in dict1.items():
#        sum+=i
       
# print(sum)





# n ,q= list(map(int, input().split()))
# arr = list(map(int, input().split()))
# def repetition(n, k, arr):
#     for i in range(len(arr)):
#         for j in range(i+1, len(arr)):
#             if arr[i] == arr[j] and abs(i-j) <= k:
#                 return "YES"
#     return "NO"

# print(repetition(n, k, arr))





































# def dominant_str(str):
#         arr = []
#         for i in range(len(str)+1):
#             for j in range(i+1, len(str)+1):
#                 arr.append(str[i:j])
                
#         hashing_table = {}
#         for i in arr:
#             if i in hashing_table:
#                 hashing_table[i] += 1
#             else:
#                 hashing_table[i] = 1
                
#         for i, j in hashing_table.items():
#             if j > 1:
#                 max = 0
#                 a = ''
#                 for i, j in hashing_table.items():
#                     if j >= 2 and len(i) > max:
#                         max = len(i)
#                         a = i
                        
#                 return a
            
#         return -1
# str=input()    
# print(dominant_str(str))
















