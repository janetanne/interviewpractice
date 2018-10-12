
import unittest

##### MERGING RANGES ##### return to this ####

# def merge_ranges(meetings):
#     """Given a list of meeting time ranges, return a list of condensed ranges."""

#     sorted_meetings = sorted(meetings)

#     condensed_meetings = []

#     for idx, meeting_time in enumerate(sorted_meetings):
#         if sorted_meetings[idx][1] >= sorted_meetings[idx+1][0]:


#     return []

# # Tests

# class Test(unittest.TestCase):

#     def test_meetings_overlap(self):
#         actual = merge_ranges([(1, 3), (2, 4)])
#         expected = [(1, 4)]
#         self.assertEqual(actual, expected)

#     def test_meetings_touch(self):
#         actual = merge_ranges([(5, 6), (6, 8)])
#         expected = [(5, 8)]
#         self.assertEqual(actual, expected)

#     def test_meeting_contains_other_meeting(self):
#         actual = merge_ranges([(1, 8), (2, 5)])
#         expected = [(1, 8)]
#         self.assertEqual(actual, expected)

#     def test_meetings_stay_separate(self):
#         actual = merge_ranges([(1, 3), (4, 8)])
#         expected = [(1, 3), (4, 8)]
#         self.assertEqual(actual, expected)

#     def test_multiple_merged_meetings(self):
#         actual = merge_ranges([(1, 4), (2, 5), (5, 8)])
#         expected = [(1, 8)]
#         self.assertEqual(actual, expected)

#     def test_meetings_not_sorted(self):
#         actual = merge_ranges([(5, 8), (1, 4), (6, 8)])
#         expected = [(1, 4), (5, 8)]
#         self.assertEqual(actual, expected)

#     def test_one_long_meeting_contains_smaller_meetings(self):
#         actual = merge_ranges([(1, 10), (2, 5), (6, 8), (9, 10), (10, 12)])
#         expected = [(1, 12)]
#         self.assertEqual(actual, expected)

#     def test_sample_input(self):
#         actual = merge_ranges([(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)])
#         expected = [(0, 1), (3, 8), (9, 12)]
#         self.assertEqual(actual, expected)


# unittest.main(verbosity=2)

##############################################################################

##### REVERSE STRING IN PLACE ####

def reverse(list_of_chars):
    """Given a list of characters, reverse the letters in place."""

    left = 0
    right = len(list_of_chars) - 1

    while left < right:
        list_of_chars[left], list_of_chars[right] = \
            list_of_chars[right], list_of_chars [left]

        left += 1
        right -= 1

    return list_of_chars

# Tests

class Test(unittest.TestCase):

    def test_empty_string(self):
        list_of_chars = []
        reverse(list_of_chars)
        expected = []
        self.assertEqual(list_of_chars, expected)

    def test_single_character_string(self):
        list_of_chars = ['A']
        reverse(list_of_chars)
        expected = ['A']
        self.assertEqual(list_of_chars, expected)

    def test_longer_string(self):
        list_of_chars = ['A', 'B', 'C', 'D', 'E']
        reverse(list_of_chars)
        expected = ['E', 'D', 'C', 'B', 'A']
        self.assertEqual(list_of_chars, expected)


unittest.main(verbosity=2)
